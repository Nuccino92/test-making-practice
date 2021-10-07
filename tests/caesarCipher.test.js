import cCipher from "../scripts/caesarCipher";

test("cipher function accepts a single word", () => {
  expect(cCipher("smelly")).toBe("smelly");
});

test("cipher function to change words", () => {
  expect(cCipher("smelly", 1)).toBe("tnfmmz");
});

test("cipher function returns capital letters if recieved", () => {
  expect(cCipher("SMELLY", 1)).toBe("TNFMMZ");
});

test("cipher function to return to the start passed z", () => {
  expect(cCipher("z", 2)).toBe("b");
});
