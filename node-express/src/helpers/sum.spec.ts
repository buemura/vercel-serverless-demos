import { describe, it, expect } from "vitest";
import { sum } from "./sum";

describe("sum function tests", () => {
  it("should return 5", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
