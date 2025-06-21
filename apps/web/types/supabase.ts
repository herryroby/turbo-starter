// apps/web/types/supabase.ts
// This is a placeholder file for your Supabase database types.
// You can generate it by running: npx supabase gen types typescript --project-id <your-project-id> > apps/web/types/supabase.ts

export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      // Your tables will be defined here
    };
    Views: {
      // Your views will be defined here
    };
    Functions: {
      // Your functions will be defined here
    };
    Enums: {
      // Your enums will be defined here
    };
    CompositeTypes: {
      // Your composite types will be defined here
    };
  };
}
