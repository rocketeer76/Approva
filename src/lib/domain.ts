export type ExpenseStatus =
  "draft" | "submitted" | "approved" | "rejected" | "paid";
const transitions: Record<ExpenseStatus, readonly ExpenseStatus[]> = {
  draft: ["submitted"],
  submitted: ["approved", "rejected"],
  approved: ["paid"],
  rejected: ["draft"],
  paid: [],
};
export const canTransition = (from: ExpenseStatus, to: ExpenseStatus) =>
  transitions[from].includes(to);
export const canApprove = (employeeId: string, managerId: string) =>
  employeeId !== managerId;
