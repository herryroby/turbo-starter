'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Define the schema for the product form using Zod for validation.
// This schema is used on the server to ensure data integrity.
// Schema for the form data (camelCase)
const productFormSchema = z.object({
  code: z.string().min(1, 'Product code is required'),
  name: z.string().min(1, 'Product name is required'),
  description: z.string().optional(),
  categoryId: z.string().uuid('Invalid category'),
  unitOfMeasureId: z.string().min(1, 'Unit of measure is required'),
  purchasePrice: z.coerce.number().min(0, 'Purchase price must be a positive number'),
  sellingPrice: z.coerce.number().min(0, 'Selling price must be a positive number'),
  quantity: z.coerce.number().min(0, 'Quantity must be a positive number'),
  isActive: z.boolean().default(true)
});

// Schema for the database (snake_case)
const productDBSchema = z.object({
  code: z.string(),
  name: z.string(),
  description: z.string().optional(),
  category_id: z.string(),
  unit_of_measure: z.string(), // Changed from unit_of_measure_id to unit_of_measure
  purchase_price: z.number(),
  selling_price: z.number(),
  quantity: z.number(),
  is_active: z.boolean()
});

export type FormState = {
  message: string;
  errors?: Record<string, string[] | undefined>;
  success: boolean;
};

/**
 * Server Action to save a new product to the database.
 * @param prevState - The previous state of the form.
 * @param formData - The data from the submitted form.
 * @returns A state object with success status, message, and any validation errors.
 */
export const saveProduct = async (prevState: FormState, formData: FormData): Promise<FormState> => {
  // Validate form data using camelCase schema
  const formDataObj = {
    code: formData.get('code'),
    name: formData.get('name'),
    description: formData.get('description'),
    categoryId: formData.get('categoryId'),
    unitOfMeasureId: formData.get('unitOfMeasureId'),
    purchasePrice: formData.get('purchasePrice'),
    sellingPrice: formData.get('sellingPrice'),
    quantity: formData.get('quantity'),
    isActive: formData.get('isActive') === 'on' || formData.get('isActive') === 'true'
  };

  const validatedFields = productFormSchema.safeParse(formDataObj);

  // If validation fails, return the errors to the form.
  if (!validatedFields.success) {
    return {
      message: 'Validation failed. Please check the fields.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false
    };
  }

    // Get the current user's tenant ID
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    return {
      message: 'User not authenticated',
      success: false
    };
  }

  // Get the user's tenant ID from their profile
  const { data: userProfile, error: profileError } = await supabase
    .from('app_users')
    .select('tenant_id')
    .eq('id', user.id)
    .single();

  if (profileError || !userProfile) {
    console.error('Error fetching user profile:', profileError);
    return {
      message: 'Error fetching user information',
      success: false
    };
  }

  // Generate a simple SKU from the product code
  const sku = `SKU-${validatedFields.data.code.toUpperCase().replace(/\s+/g, '')}`;

  // Transform camelCase to snake_case for database
  const dbData = {
    tenant_id: userProfile.tenant_id,
    sku,
    code: validatedFields.data.code,
    name: validatedFields.data.name,
    description: validatedFields.data.description,
    category_id: validatedFields.data.categoryId,
    unit_of_measure_id: validatedFields.data.unitOfMeasureId,
    unit_of_measure: 'pcs', // Default unit of measure
    purchase_price: validatedFields.data.purchasePrice,
    selling_price: validatedFields.data.sellingPrice,
    quantity: validatedFields.data.quantity,
    is_active: validatedFields.data.isActive,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  // Validate the transformed data against the DB schema
  const dbValidated = productDBSchema.safeParse(dbData);
  
  if (!dbValidated.success) {
    console.error('Database validation error:', dbValidated.error);
    return {
      message: 'Database validation error',
      success: false
    };
  }

  // Insert the product into the database
  const { error } = await supabase.from('products').insert([dbData]);

  // If there's a database error, return it.
  if (error) {
    console.error('Database Error:', error);
    return {
      message: `Database Error: ${error.message}`,
      success: false
    };
  }

  // Revalidate the products page to show the new product.
  revalidatePath('/products');

  // Return a success message.
  return {
    message: 'Product saved successfully!',
    success: true
  };
};
