# Project Rules

## General

- Every time you choose to apply a rules(s), explicity state the rules(s) in the output. You can abbreviate the rule description to a single word or phrase.

## Code Style & Formatting

- Follow the Airbnb Style Guide for code formatting.
- Write concise, technical TypeScript code with accurate examples.
- Prefer iteration and modularation over code duplication.
- Use descriptive variables name with auxiliary verbs (e.g., isLoading, hasError).
- Async/await should be used where applicable to ensure non-blocking UI operations.

## Naming Conventions

- Use kebab-case for React component file names and directories (e.g., user-card.tsx, not UserCard.tsx).
- Favor named exports for UI components and utilities.

## Project Structure & Architecture

- Use Context7 MCP Tool to find applicable components and packages if you don't know about one. You can also use this to know about a library or a package.
- Use TurboRepo for monorepo management and follow the convention.
- Use pnpm for package management.
- Follow Next.js patterns and use the App Router.
- Correctly determine when to use server vs. client components in Next.js.
- All shared UI component should be in the shared `packages/ui` package.

## Typescript

- Use TypeScript for all code. Prefer interfaces over types.
- Avoid enums. Use const objects with 'as const' assertion.
- Use TypeScript Arrow Function with export default at the end of the file (e.g., export default UserCard;, not export default UserCard() {};).
- Use absolute import for all files @/...
- Use explicit return types for all functions.

## Styling & UI

- Use Tailwind CSS for styling.
- Use Shadcn UI for components without any modification. Create a new UI components based on the Shadcn UI if you want custom component.
- Use `pnpm dlx shadcn@latest add <component-name` to add new Shadcn components.
- Use Sonner for notifications.
- Use Recharts for charts.
- Use React Joyride for onboarding.

## Data Fetching & Forms

- Use TanStack Query (react-query) for frontend data fetching.
- Use TanStack React Table for data tables.
- Use React Hook Form for form handling.
- Use Zod for validation.

## State Management & Logic

- Use React Context for global state management when needed.

## Backend & Database

- Use Nest.js for backend.
- Use Supabase for authentication and database.
- Use Prisma for database access.
- Use Axios for HTTP requests.
- Use BullMQ for background jobs.
- Use Nodemailer for email.
- Use Stripe for payments.

## Utilities

- Use PDFKit for PDF generation.
- Use SheetJS for Excel generation.
- Use Day.js for date and time.
- Use Metabase for analytics.
- Use Jest for testing.
- Use React Testing Library for component testing.
- Use Playwright for end-to-end testing.

## Performance Optimization

- Minimize bundle size using code splitting.
- Implements proper lazy loading for non-critical components.
- Optimize content script injection.
- Use proper caching strategies.
- Implements proper cleanup for event listenerrs, observers, and in useEffect hooks.

## Error Handling

- Implement proper error boundaries.
- Log errors appropriately for debugging.
- Provide user-friendly error messages.
- Handle network failures gracefully.
- Use a try-catch block to handle exceptions.
- Implement error handling for API calls using try-catch and provide proper user feedback in the UI.

## Testing

- Write unit tests for utilities and components.
- Implement E2E tests for critical flows.
- Test memory usage and performance.

## Security

- Implement Content Security Policy.
- Sanitize user inputs.
- Handle sensitive data properly.
- Implement proper CORS handling.
- Use Helmet for security headers.

## Git Usage

- Follow the commitlint rules file: commitlint.config.{js,cjs,mjs} (if exists).
- Use lowercase for commit messages.
- Keep the summary line concise.
- Include description for non-obvious changes.
- Reference issue numbers when applicable.

## Documentation

- Maintain clear README with setup instructions.
- Document API interactions and data flows.
- Keep manifest.json well-documented.
- Document permission requirements.

## Development Workflow

- Use proper version control.
- Implement proper code review process.
- Test in multiple environments.
- Follow semantic versioning for releases.
- Maintain changelog (CHANGELOG.md).
