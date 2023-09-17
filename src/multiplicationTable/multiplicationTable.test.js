const multiplicationTable = require("./multiplicationTable");

describe("multiplicationTable", () => {
  const logSpy = jest.spyOn(console, "log");

  test("multiplicationTable is a Function", () => {
    expect(multiplicationTable).toBeInstanceOf(Function);
  });

  test("log multiplication table for 7", () => {
    multiplicationTable();
    expect(logSpy).toHaveBeenNthCalledWith(1, `7 x 1 = 7`);
    expect(logSpy).toHaveBeenNthCalledWith(2, `7 x 2 = 14`);
    expect(logSpy).toHaveBeenNthCalledWith(3, `7 x 3 = 21`);
    expect(logSpy).toHaveBeenNthCalledWith(4, `7 x 4 = 28`);
    expect(logSpy).toHaveBeenNthCalledWith(5, `7 x 5 = 35`);
    expect(logSpy).toHaveBeenNthCalledWith(6, `7 x 6 = 42`);
    expect(logSpy).toHaveBeenNthCalledWith(7, `7 x 7 = 49`);
    expect(logSpy).toHaveBeenNthCalledWith(8, `7 x 8 = 56`);
    expect(logSpy).toHaveBeenNthCalledWith(9, `7 x 9 = 63`);
  });

  afterAll(() => {
    logSpy.mockReset();
  });
});
