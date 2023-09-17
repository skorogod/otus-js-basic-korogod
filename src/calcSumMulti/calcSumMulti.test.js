const calcMulti = require("./calcSumMulti");

describe("calcMulti", () => {
  const logSpy = jest.spyOn(console, "log");

  it("check calcMulti is a function", () => {
    expect(calcMulti).toBeInstanceOf(Function);
  });

  it("check 7 * 8 = 56", () => {
    calcMulti(7, 8);
    expect(logSpy).toHaveBeenCalledWith(56);
  });
  afterAll(() => {
    logSpy.mockReset();
  });
});
