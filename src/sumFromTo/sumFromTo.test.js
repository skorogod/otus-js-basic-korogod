const sumFromTo = require("./sumFromTo");

describe("sumFromTo", () => {
  const promptSpy = jest.spyOn(window, "prompt");

  it("sumFromTo is a function", () => {
    expect(sumFromTo).toBeInstanceOf(Function);
  });

  it("Sum from 50 to 100 = ", () => {
    expect(sumFromTo()).toBe(3825);
  });

  afterAll(() => {
    promptSpy.mockReset();
  });
});
