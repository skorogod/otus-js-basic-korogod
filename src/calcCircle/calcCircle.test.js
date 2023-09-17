const calcCircle = require("./calcCircle");

describe("calcCircle", () => {
  const logSpy = jest.spyOn(console, "log");

  test("calcCircle is a function", () => {
    expect(calcCircle).toBeInstanceOf(Function);
  });

  test("circumference of circle with R=8 is , circumference of circle with R=8 is ", () => {
    calcCircle(8);
    expect(logSpy).toHaveBeenNthCalledWith(1, "201.06");
    expect(logSpy).toHaveBeenNthCalledWith(2, "50.27");
  });
  afterAll(() => {
    logSpy.mockReset();
  });
});
