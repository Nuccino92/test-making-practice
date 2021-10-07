import { expect, test } from "@jest/globals";
import reverse from "../scripts/reverseString";

test("reverse string", () => {
  expect(reverse("string")).toBe("gnirts");
});

test("reverse sentence", () => {
  expect(reverse("this is a string")).toBe("gnirts a si siht");
});

test("reject non string", () => {
  expect(() => reverse(123)).toThrow("this is not a string");
});
