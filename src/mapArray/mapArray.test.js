const mapArray = require("./mapArray");

describe("mapArray", () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test(`return [2,4,6,8,10,12,14,16,18,20] ${arr.join(", ")}`, () => {
    expect(mapArray(arr)).toStrictEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
