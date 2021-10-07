import calculator from "../scripts/calculator";

test("adds two numbers", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("divide two numbers", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(4, 6)).toBe(24);
});
