const circleInSquare = require("./circleInSquare");

describe("circleInSquare", () => {
  it("circleInSquare is a function", () => {
    expect(circleInSquare).toBeInstanceOf(Function);
  });

  it("circle of area 28.26 fits into a square 36", () => {
    expect(circleInSquare(28.26, 36)).toBeTruthy();
  });

  it("circle of area 19.625 fits into a square 49", () => {
    expect(circleInSquare(19.625, 49)).toBeTruthy();
  });
});
