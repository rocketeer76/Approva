import { describe, expect, it } from "vitest";
import { canApprove, canTransition } from "../../src/lib/domain";
describe("expense workflow", () => {
  it("allows valid transitions only", () => {
    expect(canTransition("draft", "submitted")).toBe(true);
    expect(canTransition("draft", "paid")).toBe(false);
  });
  it("prevents self approval", () =>
    expect(canApprove("u1", "u1")).toBe(false));
});
