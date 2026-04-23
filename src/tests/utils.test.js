import { describe, test, expect } from "vitest";
import { add, subtract, validateEmail } from "../utils.js";

describe("Utils functions", () => {

  // --- add ---
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  // --- subtract ---
  test("subtracts numbers correctly", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtract result can be negative", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  // --- validateEmail ---
  test("valid email returns true", () => {
    expect(validateEmail("test@gmail.com")).toBe(true);
  });

  test("invalid email without @ returns false", () => {
    expect(validateEmail("testgmail.com")).toBe(false);
  });

  test("invalid email without dot returns false", () => {
    expect(validateEmail("test@gmailcom")).toBe(false);
  });

});