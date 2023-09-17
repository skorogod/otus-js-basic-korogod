const minMaxElements = require("./minMaxElements");

describe("minMaxElements", () => {
  const logSpy = jest.spyOn(console, "log");

  afterAll(() => {
    logSpy.mockReset();
  });

  test("min is 2 max is 25 for [6,20,12,4,2,25]", () => {
    const arr = [6, 20, 12, 4, 2, 25];
    minMaxElements(arr);
    expect(logSpy).toHaveBeenCalledWith("min = 2, max = 25");
  });
});
