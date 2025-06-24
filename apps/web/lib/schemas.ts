// apps/web/lib/schemas.ts
// Zod validation schemas for forms (login, signup, etc.)
// Following "TypeScript First" and "Self-Documenting" rules.

import { z } from 'zod';

/**
 * Schema for the Login form. Ensures a valid email and a minimum password length.
 */
export const LoginSchema = z.object({
  email: z.string().email({ message: 'Please provide a valid email address.' }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
  }),
});

/**
 * Schema for the Signup form. Adds a fullName field while reusing Login validations.
 */
export const SignupSchema = LoginSchema.extend({
  fullName: z.string().min(1, {
    message: 'Full name is required.',
  }),
});
