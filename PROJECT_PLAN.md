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

### Phase 1: Foundation & Authentication (Complete, with pending redirect fix)

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

- ⏸️ **Fix OAuth Redirect (On Hold):** The redirect after Google login does not respect the `next` parameter.
  - **Note:** This issue is parked after multiple attempts. The core authentication flow is functional. This will be revisited in Phase 4 or if it becomes a critical blocker.

---

### Phase 2: Data & GraphQL Layer (100% Completed)

**Objective:** Define the data structure, implement security policies, and set up the GraphQL API layer for data fetching and mutations.

**Summary of Achievements:**

- ✅ **Switched to Supabase Cloud:** Shifted the entire workflow from a local Docker setup to a dedicated Supabase Cloud project, resolving numerous environment inconsistencies.
- ✅ **Unified Database Schema:** Consolidated all individual migration files into a single, comprehensive bootstrap script (`001-cloud-bootstrap.sql`) in `supabase/migrations/`. This script successfully set up all required tables, functions, and policies in the cloud.
- ✅ **Robust Row-Level Security (RLS):** Implemented and verified multi-tenancy RLS policies. **Crucially, corrected a faulty `SELECT` policy on the `profiles` table and added a trigger (`handle_new_user`) to auto-populate profiles, resolving the final data access issue.**
- ✅ **Secure GraphQL Introspection:** Configured the correct permissions (`GRANT USAGE`, `GRANT SELECT`) and a restrictive RLS policy (`USING (false)`) for the `anon` role. This allows GraphQL Codegen to securely introspect the schema without exposing any data.
- ✅ **Successful GraphQL Codegen:** After resolving schema, permission, and query issues, the `pnpm gen:graphql` command executed successfully. The typed hooks, including `useProfilesCollectionQuery`, are now correctly generated.
- ✅ **Stable Apollo Client Integration:** Successfully integrated Apollo Client with Next.js 15 (App Router & Turbopack) after resolving complex runtime and build errors. The setup now correctly uses `@apollo/client-integration-nextjs` for stable client-side data fetching.
- ✅ **Build & Runtime Errors Resolved:** The successful codegen and stable Apollo setup have resolved all critical build and runtime errors, enabling a smooth development workflow.

---

### Phase 3: Core ERP Modules (In Progress)

**Objective:** Begin development of the core ERP features, starting with a basic dashboard to display user and tenant information.

**Summary of Achievements:**

- ✅ **User Profile Component:** Created the first dashboard component (`user-profile.tsx`) which successfully fetches and displays the logged-in user's profile data via GraphQL, validating the entire data layer stack.

**Next Steps:**

- Build out the main dashboard layout.
- Implement components for tenant management.
- Add functionality for product and category display.

**Rules Applied:** `Next.js`, `React`, `TypeScript`, `Tailwind CSS`, `Shadcn UI`, `TanStack Query`, `Apollo Client`

**Step-by-Step Plan:**

1. **Dashboard UI Enhancement:**
   - Enhance the `UserProfile` component to properly display the fetched user data (full name, email, etc.).
   - Create a new component to display the current user's tenant information.
   - Design a clean and simple dashboard layout using Shadcn UI components (`Card`, `Table`, etc.).
2. **Product Management Module (Basic):**
   - Create a new page for listing products (`/dashboard/products`).
   - Use the generated GraphQL hooks to fetch and display a list of products from the `products` table.
   - Implement a data table using TanStack React Table to display the product list with sorting and filtering capabilities.

3. **Category Management Module (Basic):**
   - Create a new page for listing product categories (`/dashboard/categories`).
   - Fetch and display a list of categories.

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
