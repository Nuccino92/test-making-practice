import capitalize from "../scripts/capitalize";

test("returns capitalized string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("only first word capitalized", () => {
  expect(capitalize("this string")).toBe("This string");
});

test("throws error for number inputs", () => {
  expect(() => capitalize(123)).toThrow("only strings accepted");
});
