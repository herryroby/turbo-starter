import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

interface ProductFromDB {
  product_id: string;
  code: string | null;
  name: string;
  description: string | null;
  category_id: string | null;
  unit_of_measure?: string;
  is_active: boolean | null;
  is_purchased: boolean | null;
  is_sold: boolean | null;
  purchase_price: number | null;
  selling_price: number | null;
  quantity: number | null;
  reorder_point: number | null;
  reorder_quantity: number | null;
  created_at: string | null;
  updated_at: string | null;
  product_categories: {
    name: string;
  } | null;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const pageSize = searchParams.get('pageSize') ? Number(searchParams.get('pageSize')) : 10;

    const supabase = await createClient();
    
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, error, count } = await supabase
      .from('products')
      .select(`
        *,
        product_categories!inner(name)
      `, { count: 'exact' })
      .range(from, to);

    if (error) {
      console.error('Error fetching products:', error);
      return NextResponse.json(
        { error: 'Failed to fetch products' },
        { status: 500 }
      );
    }

    // Transform the data to match the Product type
    const products = (data || []).map((p: ProductFromDB) => ({
      productId: p.product_id,
      code: p.code || '',
      name: p.name,
      description: p.description || '',
      categoryId: p.category_id || '',
      unitOfMeasure: p.unit_of_measure || 'unit',
      unitOfMeasureId: p.unit_of_measure || 'unit',
      unitOfMeasureName: p.unit_of_measure || 'unit',
      categoryName: p.product_categories?.name || 'N/A',
      isActive: p.is_active ?? true,
      isPurchased: p.is_purchased ?? false,
      isSold: p.is_sold ?? false,
      purchasePrice: p.purchase_price || 0,
      sellingPrice: p.selling_price || 0,
      quantity: p.quantity || 0,
      reorderPoint: p.reorder_point || 0,
      reorderQuantity: p.reorder_quantity || 0,
      purchaseAccountId: '',
      purchaseTaxId: '',
      sellingAccountId: '',
      sellingTaxId: '',
      createdAt: p.created_at ? new Date(p.created_at) : new Date(),
      updatedAt: p.updated_at ? new Date(p.updated_at) : new Date(),
    }));

    return NextResponse.json({
      data: products,
      count: count || 0,
    });
  } catch (error) {
    console.error('Error in products API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
