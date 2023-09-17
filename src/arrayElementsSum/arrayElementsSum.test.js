const arrayElementsSum = require("./arrayElementsSum");

describe("arrayElementsSum", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test(`return 55 for sum of elements ${arr.join(", ")}`, () => {
    expect(arrayElementsSum(arr)).toBe(55);
  });
});
