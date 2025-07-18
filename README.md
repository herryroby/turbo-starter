# Qonsula ERP - Enterprise SaaS

This repository contains the source code for Qonsula, a production-ready, multi-tenant Enterprise SaaS ERP application built with a modern technology stack.

## Core Technologies

- **Monorepo**: [Turborepo](https://turbo.build/repo) with [pnpm](https://pnpm.io/)
- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Backend as a Service (BaaS)**: [Supabase](https://supabase.com/) (Database, Auth, Storage)
- **API Layer**: RESTful services via Supabase's REST API & Next.js Server Actions
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Fetching & State**: [TanStack Query](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Project Structure

- `apps/web`: The main Next.js web application.
- `packages/ui`: Shared React components library based on Shadcn UI.
- `packages/typescript-config`: Shared TypeScript configurations.
- `packages/eslint-config`: Shared ESLint configurations.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- pnpm (v8 or later)
- A Supabase project.

### 1. Clone the repository

```sh
git clone <repository-url>
cd qonsola
```

### 2. Install dependencies

```sh
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the `apps/web` directory by copying the example file:

```sh
cp apps/web/.env.example apps/web/.env.local
```

Update `apps/web/.env.local` with your Supabase project URL and anon key.

### 4. Run the development server

```sh
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Architectural Principles

- **Clean Architecture**: The codebase follows a strict separation of concerns, isolating UI, business logic, and data access layers.
- **Multi-Tenancy**: Data is isolated between tenants using Supabase's Row-Level Security (RLS).
- **Server-First**: We leverage Next.js Server Components and Server Actions for performance and a better developer experience.
