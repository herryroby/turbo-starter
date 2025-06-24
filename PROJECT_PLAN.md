# Qubix ERP - Enterprise SaaS Implementation Plan

## 1. Project Vision & Core Objective

To build a production-ready, multi-tenant Enterprise SaaS ERP application. The system must be secure, scalable, maintainable, and adhere to modern enterprise development standards.

**Core Technologies:**

- **Monorepo:** Turborepo with pnpm
- **Frontend:** Next.js (App Router)
- **Backend/BaaS:** Supabase (Auth, Database, Storage)
- **API:** GraphQL (via Supabase's PostgREST/GraphQL layer)
- **Styling:** Tailwind CSS + Shadcn UI
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form + Zod

---

## 2. Guiding Architectural Principles (Rules Applied)

This plan adheres to the user-defined rules, emphasizing:

- **Clean Architecture:** Strict separation of concerns (UI, Business Logic, Data Access).
- **TypeScript First:** End-to-end type safety.
- **Multi-Tenant Security:** Tenant isolation via Row-Level Security (RLS) is paramount.
- **Scalability:** Stateless services, background jobs, and caching strategies.
- **Developer Experience:** Codegen for type safety, monorepo for code sharing.

---

## 3. Phased Implementation Roadmap

### Phase 1: Foundation & Authentication (95% Complete)

**Objective:** Establish a secure and robust authentication system with route protection.

**Rules Applied:** `Next.js`, `Supabase`, `Clean Architecture`, `UX-Redirect`

**Tasks Completed:**

- ✅ Monorepo setup (`apps/web`, `packages/ui`).
- ✅ Supabase client setup (`client`, `server`, `admin`).
- ✅ Environment variable configuration (`turbo.json`).
- ✅ Middleware for route protection.
- ✅ Server Actions for email/password login, signup, and sign-out.
- ✅ Zod schemas for validation.
- ✅ OAuth (Google) login flow initiated.
- ✅ Callback route (`/auth/callback`) for session exchange.

**Remaining Task (To be completed at the start of Phase 2):**

- 🚧 **Fix OAuth Redirect (In Progress):** The redirect after Google login does not respect the `next` parameter.
  - **Solution:** Relying **only** on a short-lived cookie (`next_path`) to pass the redirect path through the OAuth flow. The `loginWithGoogle` action sets the cookie, and the `/auth/callback` route reads it. This avoids issues with URL query parameters being stripped by providers.

---

### Phase 2: Data & GraphQL Layer (Current Phase)

**Objective:** Define the data structure, implement security policies, and set up the GraphQL API layer for data fetching and mutations.

**Rules Applied:** `GraphQL`, `Apollo`, `Supabase`, `RLS`, `Database Design`, `Codegen`

**Step-by-Step Plan:**

1. **Database Schema (SQL):**
   - Create initial SQL migration scripts in `supabase/migrations/`.
   - Define core tables: `tenants`, `profiles` (extends `auth.users`), `roles`, `profile_roles`.
   - Establish relationships (e.g., a profile belongs to one tenant).
   - Each table must have a `tenant_id` column where applicable.
2. **Row-Level Security (RLS):**
   - Create a helper function in SQL `auth.get_tenant_id()` to extract `tenant_id` from the JWT.
   - Apply RLS policies to all tenant-specific tables (e.g., `CREATE POLICY "Enable access for users based on tenant" ON invoices FOR ALL USING (tenant_id = auth.get_tenant_id());`).
   - Enable RLS on all relevant tables.
3. **GraphQL Setup (Apollo Client):**
   - Install Apollo Client packages: `@apollo/client`, `@apollo/experimental-nextjs-app-support`.
   - Create `apps/web/lib/apollo/` directory.
   - **`client.ts`:** Configure Apollo Client for client-side use. Implement an auth link that dynamically gets the Supabase session token (`Authorization: Bearer <access_token>`).
   - **`server.ts`:** Configure a separate, leaner client for server components (RSC).
   - **`ApolloWrapper.tsx`:** Create a wrapper component to provide the Apollo Client context to the application, to be used in the root `layout.tsx`.
4. **GraphQL Codegen:**
   - Install `graphql-codegen` and required plugins.
   - Create `codegen.ts` (or `.yml`) in the root directory.
   - Configure it to introspect the Supabase GraphQL schema (`/graphql/v1`).
   - Generate typed hooks and fragments into `apps/web/lib/graphql/generated/`.
   - Add a `pnpm gen:graphql` script to `package.json`.
5. **Cleanup & Initial Query:**
   - Remove the placeholder `todosCollection` query causing errors.
   - Create a sample server component (e.g., `app/dashboard/page.tsx`) that uses a generated hook to fetch data (e.g., `useGetProfileQuery`).

---

### Phase 3: Core ERP Modules (UI & Logic)

**Objective:** Build the primary features of the ERP, starting with a key module like "Sales" or "Inventory".

**Rules Applied:** `React Hook Form`, `Zod`, `Shadcn UI`, `TanStack Query`, `Component Strategy`

**Step-by-Step Plan:**

1. **Shared UI Components:**
   - Develop generic, reusable components in `packages/ui` (e.g., `DataTable`, `PageHeader`, `FormInput`).
   - Use `shadcn-ui` as the base.
2. **Feature: Sales Invoices:**
   - **List View (`/sales/invoices`):**
     - Create a server component to display invoices in a `DataTable`.
     - Use a generated GraphQL query hook for data fetching.
     - Implement server-side pagination and sorting.
   - **Create/Edit Form (`/sales/invoices/new`, `/sales/invoices/[id]/edit`):**
     - Use client components for interactivity.
     - Manage form state with `React Hook Form`.
     - Validate with a Zod schema (`InvoiceSchema`).
     - Use a generated GraphQL mutation hook (`useCreateInvoiceMutation`) to submit data.
     - Show notifications on success/error using `sonner`.
3. **State Management:**
   - Rely on TanStack Query (via Apollo Client's cache) for server state.
   - Use React Context for minimal, slowly changing global state (e.g., current user profile, theme).

---

### Phase 4: Production Readiness & Advanced Features

**Objective:** Harden the application, add advanced functionality, and prepare for deployment.

**Rules Applied:** `Testing`, `Background Jobs`, `Caching`, `CI/CD`

**Step-by-Step Plan:**

1. **Background Jobs (BullMQ):**
   - Set up BullMQ with Redis (Upstash).
   - Create workers for long-running tasks (e.g., PDF generation for invoices, sending emails).
2. **Advanced Caching:**
   - Implement Redis caching for expensive database queries or computed data that doesn't change often.
3. **Testing:**
   - **Unit Tests (Jest):** For utility functions and business logic. Aim for >80% coverage on critical code.
   - **Component Tests (React Testing Library):** For UI components in isolation.
   - **E2E Tests (Playwright):** For critical user flows like authentication, invoice creation.
4. **CI/CD & Deployment:**
   - Set up a GitHub Actions workflow.
   - Lint, test, and build on every push to `main`.
   - Configure deployment to a provider like Vercel or AWS Amplify.

---

## 4. Portability Strategy

To ensure context is never lost when switching development environments or developers (human or AI), this `PROJECT_PLAN.md` file will serve as the **single source of truth** for the project's goals, architecture, and progress.

**Workflow:**

1. **Always refer to this file** at the start of a new session.
2. **Update this file** as tasks are completed and new decisions are made.
3. **Commit changes to this file** along with the related code changes.

This approach keeps the project plan version-controlled and tightly coupled with the codebase itself.
