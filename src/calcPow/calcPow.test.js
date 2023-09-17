const calcPow = require("./calcPow");

describe("calcPow", () => {
  it("calcPow is a function", () => {
    expect(calcPow).toBeInstanceOf(Function);
  });

  it("8^2 = 64", () => {
    expect(calcPow(8, 2)).toBe(64);
  });
});
