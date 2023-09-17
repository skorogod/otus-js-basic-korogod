const getMonth = require("./getMonth");

describe("getMonth", () => {
  const promptSpy = jest.spyOn(window, "prompt");

  it("check getMonth is a function", () => {
    expect(getMonth).toBeInstanceOf(Function);
  });

  it("return march for 3", () => {
    promptSpy.mockReturnValue("3");
    expect(getMonth()).toBe("march");
  });

  it("return march for 15", () => {
    promptSpy.mockReturnValue("15");
    expect(getMonth()).toBe("not in object");
  });

  afterAll(() => {
    promptSpy.mockReset();
  });
});
