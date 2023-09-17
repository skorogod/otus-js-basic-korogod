const calcSymbolsSum = require("./calcSymbolsSum");

describe("calcSymbolsSum", () => {
  const logSpy = jest.spyOn(console, "log");

  it("check calcSymbolsSum is a function", () => {
    expect(calcSymbolsSum).toBeInstanceOf(Function);
  });

  test("check car + bike symbols length = 7", () => {
    calcSymbolsSum("car", "bike");
    expect(logSpy).toHaveBeenCalledWith(7);
  });

  test("check car + 1 returns 'bot params must be a string'", () => {
    calcSymbolsSum("car", 1);
    expect(logSpy).toHaveBeenCalledWith("both params must be a string");
  });

  afterEach(() => {
    logSpy.mockReset();
  });
});
