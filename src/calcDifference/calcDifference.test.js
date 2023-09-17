const calcDiff = require("./calcDifference");

describe("calcDifference", () => {
  it("calcDiff is a function", () => {
    expect(calcDiff).toBeInstanceOf(Function);
  });

  it("4 is difference between 7 and 3", () => {
    expect(calcDiff(3, 7)).toBe(4);
  });
});
