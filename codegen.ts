import { CodegenConfig } from '@graphql-codegen/cli';
import 'dotenv/config';

// Check for required environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_GRAPHQL_URL is not set');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set');
}

const config: CodegenConfig = {
  overwrite: true,
  // The schema is the introspection result of our Supabase GraphQL endpoint.
  schema: [
    {
      [`${process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL}`]: {
        headers: {
          apiKey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`
        }
      }
    }
  ],
  // This is where we define the files that contain our GraphQL operations.
  // We're telling codegen to look for .ts, .tsx and .graphql files.
  documents: ['apps/web/lib/graphql/queries/**/*.graphql'],

  // Where to output the generated files
  generates: {
    'apps/web/lib/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true
      }
    }
  },
  // Ignore introspection fields
  ignoreNoDocuments: true
};

export default config;
