# Approva — Product Requirements Document

**Tagline:** Expenses made simple.

## Product Summary
Approva is an internal expense-approval application. Employees submit expense reports and receipts, managers approve or reject them, and finance users mark approved claims as paid.

## Goals
- Make expense submission fast.
- Keep approval status transparent.
- Enforce business rules server-side.
- Preserve an auditable history of every status change.

## Roles
- Employee
- Manager
- Finance
- Administrator

## Core Workflow
`draft → submitted → approved / rejected → paid`

## Employee Capabilities
Create reports, add multiple items, upload receipts, save drafts, submit, and view status/history.

## Manager Capabilities
View approval queue, inspect reports and receipts, approve, reject, and comment. A manager must never approve their own expense.

## Finance Capabilities
View approved reports, filter by payment status, mark reports paid, and export payment data.

## Required Screens
- Sign in
- Dashboard
- Expense reports list
- New report
- Expense detail
- Approval queue
- Finance processing
- Reports
- Mobile expense list

## Expense Report Fields
Employee, title, description, currency, total amount, status, submitted at, approved at, paid at.

## Expense Item Fields
Date, category, description, amount, receipt.

## Categories
Travel, meals, lodging, software, office, transport, other.

## Data Model
- `users`
- `expense_reports`
- `expense_items`
- `expense_approvals`
- `expense_comments`
- `expense_attachments`
- `expense_activities`

## Business Rules
- Draft reports are editable.
- Submitted reports are locked.
- Rejected reports may return to draft.
- Only managers can approve.
- Users cannot approve their own report.
- Only finance can mark paid.
- Every workflow transition creates an activity record.

## Files
Use Cloudflare R2 for receipts. Validate image/PDF type, size, ownership, and secure access.

## Email
Use Resend for report submitted, approval requested, approved, rejected, and paid notifications.

## Reporting
Spend by category, spend by employee, spend by month, approval rate, average approval time.

## Testing
### Vitest
Workflow transitions, approval rules, total calculations, Zod schemas.

### Playwright
Employee submits expense, manager approves/rejects, finance marks paid, restricted actions fail for unauthorized roles.

## Technology Baseline
Astro, SolidJS, TypeScript, Vite, Node.js, Tailwind CSS, Neon Postgres, Neon Auth, direct SQL, Zod, Cloudflare R2, Resend, Vitest, Playwright, ESLint, Prettier, Sentry, GitHub Actions, Netlify, Cloudflare DNS.

## MVP Acceptance Criteria
- Employee can create and submit a report.
- Receipt upload works.
- Manager can approve or reject.
- Manager cannot approve own report.
- Finance can mark approved report as paid.
- Audit history is created.
- Emails are sent.
- Core workflow passes Playwright.
