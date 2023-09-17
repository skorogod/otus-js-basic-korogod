const isRightTriangle = require("./isRightTriangle");

describe("isRightTriangle", () => {
  test("trinagle with sides length 3,5,4 is a right Triangle", () => {
    expect(isRightTriangle(3, 5, 4)).toBeTruthy();
  });
  test("trinagle with sides length 5,5,8 is not a right Triangle", () => {
    expect(isRightTriangle(5, 5, 8)).toBeFalsy();
  });
});
