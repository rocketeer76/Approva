# Approva

Expenses made simple.

A simple expense approval workflow built with Astro, SolidJS, TypeScript, and Neon Postgres. Employees submit expenses and receipts, managers approve or reject them, and finance tracks payments with audit history and reporting.

## Local setup

1. Copy `.env.example` to `.env` and add development credentials.
2. Run `npm install`.
3. Apply `migrations/001_initial.sql` to the development Neon database.
4. Run `npm run dev`.

## Quality checks

- `npm run verify` runs linting, Astro checks, unit tests, and a production build.
- `npm run test:e2e` runs the Playwright flow after browser installation.

Product scope is defined in [Approva_PRD.md](./Approva_PRD.md).
