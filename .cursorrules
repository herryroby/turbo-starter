# Global Rules - Production-Ready & Enterprise-Grade Development

## General Rules

- **Rule Application**: Every time you choose to apply a rule(s), explicitly state the rule(s) in the output. You can abbreviate the rule description to a single word or phrase.
- **Primary Goal**: Focus on implementing production-ready, enterprise-grade applications with emphasis on scalability, maintainability, and security.

## Code Quality & Standards

### TypeScript & JavaScript Standards

- **Language Standards**: Always follow language-specific best practices and established coding conventions (PEP8 for Python, ESLint for JavaScript/TypeScript, Airbnb style guide).
- **TypeScript First**: Use TypeScript for all code. Prefer interfaces over types.
- **No Enums**: Avoid enums. Use const objects with 'as const' assertion.
- **Function Types**: Use TypeScript Arrow Function with named export and explicit return types for all functions.
- **Imports**: Use absolute import for all files `@/...`
- **Code Structure**: Write concise, technical TypeScript code with accurate examples.
- **Self-Documenting**: Write self-documenting code with clear variable names, function signatures, and inline comments for complex logic.
- **DRY Principle**: Prefer iteration and modularization over code duplication.
- **Variable Naming**: Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`).
- **Async Operations**: Use async/await where applicable to ensure non-blocking UI operations.
- **Design Principles**: Emphasis on clean code, SOLID principles, modular design, and design patterns appropriate for the technology stack.

## Enterprise Architecture

### Architectural Patterns

- **Clean Architecture**: Follow clean architecture principles with clear separation of concerns.
- **Layered Architecture**: Implement proper layering (Presentation, Business Logic, Data Access).
- **Dependency Injection**: Use dependency injection for better testability and maintainability.
- **Repository Pattern**: Apply repository pattern for data access abstraction.
- **Service Layer**: Implement service layer for business logic encapsulation.
- **Microservices Ready**: Design for microservices compatibility when applicable.

## Project Structure & Technology Stack

### Monorepo & Package Management

- **Monorepo**: Use TurboRepo for monorepo management and follow the convention.
- **Package Manager**: Use pnpm for package management.
- **Component Discovery**: Use Context7 MCP Tool to find applicable components and packages if you don't know about one.

### Frontend Framework & Patterns

- **Next.js**: Follow Next.js patterns and use the App Router.
- **Component Strategy**: Correctly determine when to use server vs. client components in Next.js.
- **Shared Components**: All shared UI components should be in the shared `packages/ui` package.

### Backend Framework

- **Backend Choice**: Use Nest.js for non-SaaS backend or use Supabase for SaaS as a BaaS.
- **Nest.js Structure**: If using Nest.js, follow Nest.js patterns and generate all modules inside `modules/` folder.

## Naming Conventions & File Organization

### File & Directory Standards

- **Component Files**: Use kebab-case for React component file names and directories (e.g., `user-card.tsx`, not `UserCard.tsx`). For List Page components, use the following format `*.ls.tsx` (e.g., `user.ls.tsx`) and for Form Page components, use the following format `*.fm.tsx` (e.g., `user.fm.tsx`).
- **Exports**: Favor named exports for all components and utilities.
- **Consistency**: Maintain consistent naming conventions and folder structure throughout the project.

## Styling & UI Components

### UI Framework & Components

- **Styling**: Use Tailwind CSS for styling.
- **Component Library**: Use Shadcn UI for components without any modification. Create new UI components based on Shadcn UI if you want custom components.
- **Component Installation**: Use `pnpm dlx shadcn@latest add <component-name>` to add new Shadcn components.
- **Notifications**: Use Sonner for notifications.
- **Charts**: Use Recharts for charts.
- **Onboarding**: Use React Joyride for onboarding.

## Data Management & Forms

### Data Fetching & State

- **Data Fetching**: Use TanStack Query (react-query) for frontend data fetching.
- **Data Tables**: Use TanStack React Table for data tables.
- **Form Handling**: Use React Hook Form for form handling.
- **Validation**: Use Zod for validation.
- **Global State**: Use React Context for global state management when needed.

### Database & ORM

- **Database Access**: Use Prisma for non-Oracle database access and use TypeORM for Oracle database access.
- **Database Design**: Design normalized database schemas with proper relationships and constraints.
- **Migrations**: Implement database migrations with version control and rollback capabilities on development environment (disable database migrations if using Oracle database).
- **Connection Management**: Use connection pooling and implement proper connection management.
- **Data Consistency**: Design for data consistency with appropriate transaction isolation levels.
- **Audit Trails**: Implement audit trails for critical business operations.
- **Backup Strategy**: Plan for data backup and recovery strategies.

## Backend Services & Integration

### HTTP & Background Services

- **HTTP Client**: Use Axios for HTTP requests.
- **Background Jobs**: Use BullMQ for background jobs.
- **Email Service**: Use Nodemailer for email.
- **Payment Processing**: Use Stripe for payments.

## Utilities & Tools

### Common Utilities

- **PDF Generation**: Use PDFKit for PDF generation.
- **Excel Generation**: Use SheetJS for Excel generation.
- **Date/Time**: Use Day.js for date and time operations.
- **Analytics**: Use Metabase for analytics.

## Testing Strategy

### Testing Framework & Coverage

- **Unit Testing**: Use Jest for testing with minimum 80% code coverage for critical business logic.
- **Component Testing**: Use React Testing Library for component testing.
- **E2E Testing**: Use Playwright for end-to-end testing.
- **Integration Tests**: Implement integration tests for API endpoints and external service interactions.
- **Critical Workflows**: Create end-to-end tests for critical user workflows.
- **Test Doubles**: Use test doubles (mocks, stubs, fakes) appropriately for isolated testing.
- **Performance Testing**: Implement performance testing for load and stress scenarios.
- **TDD Practice**: Practice test-driven development (TDD) where appropriate.

## Performance & Scalability

### Frontend Performance

- **Bundle Optimization**: Minimize bundle size using code splitting.
- **Lazy Loading**: Implement proper lazy loading for non-critical components.
- **Content Optimization**: Optimize content script injection.
- **Memory Management**: Implement proper cleanup for event listeners, observers, and in useEffect hooks.

### Backend Performance

- **Database Optimization**: Optimize database queries with proper indexing, query optimization, and connection pooling.
- **Caching Strategy**: Implement caching strategies where appropriate (Redis, Memcached, CDN).
- **Pagination**: Use server-side pagination for large data sets and implement efficient data loading patterns.
- **Resource Efficiency**: Minimize resource usage through efficient algorithms and data structures.
- **Scalability**: Consider horizontal scalability in architectural decisions.
- **Logging Performance**: Implement proper logging levels to avoid performance impact in production.

## Error Handling & Resilience

### Comprehensive Error Management

- **Exception Handling**: Implement comprehensive error handling with proper exception management and graceful failure modes.
- **Error Boundaries**: Implement proper error boundaries in React applications.
- **Logging**: Log errors appropriately for debugging with sufficient context.
- **User Experience**: Provide user-friendly error messages.
- **Network Resilience**: Handle network failures gracefully.
- **Try-Catch**: Use try-catch blocks to handle exceptions.
- **API Error Handling**: Implement error handling for API calls using try-catch and provide proper user feedback in the UI.
- **Circuit Breaker**: Implement circuit breaker patterns for external service calls.
- **Retry Logic**: Use retry mechanisms with exponential backoff for transient failures.
- **Timeout Handling**: Implement proper timeout handling for all external communications.

## Security First Approach

### Security Implementation

- **Secrets Management**: Never hardcode sensitive information (API keys, passwords, database credentials) - use environment variables or secure vaults.
- **Input Validation**: Implement proper input validation and sanitization to prevent injection attacks.
- **SQL Injection Prevention**: Use parameterized queries for database operations to prevent SQL injection.
- **Access Control**: Apply principle of least privilege in authentication and authorization implementations.
- **Security Headers**: Include security headers in web applications (CORS, CSP, HSTS, etc.).
- **Input Sanitization**: Validate and sanitize all user inputs before processing.
- **Content Security Policy**: Implement Content Security Policy for web applications.

## Configuration Management

### Environment & Feature Management

- **External Configuration**: Externalize all configuration using environment-specific config files.
- **Feature Flags**: Implement feature flags for safe deployment and rollback capabilities.
- **Config Validation**: Use configuration validation to catch misconfigurations early.
- **Multi-Environment**: Support multiple environments (development, staging, production) with appropriate configs.
- **Secrets Security**: Implement secrets management with proper encryption and access controls.

## Version Control & Git Workflow

### Git Best Practices

- **Conventional Commits**: Use conventional commits for commit messages.
- **Commitlint**: Follow the commitlint rules file: `commitlint.config.{js,cjs,mjs}` (if exists) when generating commit messages.
- **Commit Format**: Use lowercase for commit messages and keep the summary line concise.
- **Descriptions**: Include description for non-obvious changes.
- **Issue References**: Reference issue numbers when applicable.
- **Code Review**: Implement proper code review process.
- **Version Control**: Use proper version control practices.
- **Semantic Versioning**: Follow semantic versioning for releases.
- **Changelog**: Maintain changelog (CHANGELOG.md).

## Code Review & Quality Gates

### Automated Quality Assurance

- **Static Analysis**: Implement automated code quality checks using static analysis tools (SonarQube, CodeClimate).
- **CI Integration**: Set up continuous integration with automated testing and quality gates.
- **Peer Review**: Require peer code reviews before merging to main branches.
- **Linting**: Use linting tools and enforce coding standards automatically.
- **Security Scanning**: Implement security scanning in CI/CD pipelines.

## CI/CD & DevOps

### Deployment & Infrastructure

- **Automated Pipelines**: Implement automated build and deployment pipelines with proper stage gates.
- **Infrastructure as Code**: Use infrastructure as code (Terraform, CloudFormation, Ansible).
- **Zero-Downtime Deployment**: Implement blue-green or canary deployments for zero-downtime releases.
- **Rollback Mechanisms**: Set up automated rollback mechanisms for failed deployments.
- **Containerization**: Use containerization (Docker) with proper image management and security scanning.
- **Artifact Management**: Implement proper artifact management and versioning.

## Monitoring & Observability

### Production Monitoring

- **Structured Logging**: Implement comprehensive logging with structured logging formats (JSON).
- **Application Monitoring**: Set up application monitoring with metrics, traces, and alerts.
- **Health Checks**: Use health checks and readiness probes for service monitoring.
- **Distributed Tracing**: Implement distributed tracing for microservices architectures.
- **Error Tracking**: Set up error tracking and exception monitoring (Sentry, Rollbar).
- **Operational Dashboards**: Create operational dashboards for key business and technical metrics.

## Documentation Standards

### Project Documentation

- **README**: Maintain clear README with setup instructions and project overview.
- **API Documentation**: Document API interactions and data flows comprehensively.
- **Configuration Docs**: Keep configuration files well-documented (e.g., manifest.json).
- **Permission Documentation**: Document permission requirements clearly.
- **Architecture Decisions**: Document architectural decisions using Architecture Decision Records (ADRs).
- **Operational Runbooks**: Create operational runbooks for common troubleshooting scenarios.

## Development Workflow

### Process & Environment Management

- **Multi-Environment Testing**: Test in multiple environments before production deployment.
- **Development Environment**: Ensure consistent development environment setup across team members.
- **Code Standards**: Maintain consistent code formatting using automated formatters (Prettier, Black, etc.).

## Implementation Checklist

### Production Readiness Validation

Before considering any code production-ready, ensure:

- [ ] **Security**: All security vulnerabilities addressed and secrets properly managed
- [ ] **Testing**: Comprehensive test coverage implemented (minimum 80% for critical logic)
- [ ] **Performance**: Performance benchmarks met and optimization implemented
- [ ] **Monitoring**: Monitoring, logging, and alerting configured
- [ ] **Documentation**: Complete documentation including README, API docs, and runbooks
- [ ] **Code Review**: Peer code review completed and approved
- [ ] **CI/CD**: Automated build and deployment pipeline configured and tested
- [ ] **Deployment Strategy**: Production deployment strategy defined and tested
- [ ] **Rollback**: Rollback procedures implemented and tested
- [ ] **Security Scan**: Security scanning passed in CI/CD pipeline
- [ ] **Compliance**: All compliance requirements met
- [ ] **Error Handling**: Comprehensive error handling and resilience patterns implemented
- [ ] **Configuration**: All configuration externalized and environment-specific
- [ ] **Dependencies**: Dependencies updated, secured, and vulnerability-free
- [ ] **Performance**: Database queries optimized and caching implemented where needed

## Emergency Response Protocol

### Production Issue Management

When production issues occur:

1. **Immediate Assessment**: Assess impact and communicate to stakeholders
2. **Quick Response**: Implement rollback if immediate fix isn't available
3. **Diagnostic Gathering**: Collect diagnostic information from logs and monitoring systems
4. **Hotfix Process**: Apply hotfix following expedited but proper review process
5. **Post-Mortem**: Conduct thorough post-mortem and update procedures to prevent recurrence
6. **Documentation**: Document lessons learned and update emergency procedures

## Key Reminders

- **Production vs Working Code**: Code that works is not the same as production-ready code
- **Priority Order**: Always prioritize reliability, security, and maintainability over quick delivery
- **Enterprise Standards**: Every implementation should meet enterprise-grade standards from the start
- **Continuous Improvement**: Regularly review and update these rules based on project learnings and industry best practices
