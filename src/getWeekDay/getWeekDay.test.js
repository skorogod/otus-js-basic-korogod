const getWeekDay = require("./getWeekDay");

describe("getWeekDay", () => {
  const promptSpy = jest.spyOn(window, "prompt");
  it("return Wendsday for 23.08.2023", () => {
    promptSpy.mockReturnValue("23.08.2023");
    expect(getWeekDay()).toBe("Wednesday");
  });
  afterAll(() => {
    promptSpy.mockReset();
  });
});
