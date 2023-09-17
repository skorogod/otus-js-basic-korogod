const quadraticEquation = require("./quadraticEquation");

describe("quadraticEquation", () => {
  const promptSpy = jest.spyOn(window, "prompt");

  test("quadraticEqulation is a function", () => {
    expect(quadraticEquation).toBeInstanceOf(Function);
  });

  test("return [1,4] in any order", () => {
    promptSpy.mockReturnValueOnce("1");
    promptSpy.mockReturnValueOnce("-5");
    promptSpy.mockReturnValueOnce("4");
    expect(quadraticEquation()).toEqual(expect.arrayContaining([1, 4]));
  });

  test("", () => {
    promptSpy.mockReturnValueOnce("1");
    promptSpy.mockReturnValueOnce("-3");
    promptSpy.mockReturnValueOnce("2");
    expect(quadraticEquation()).toEqual(expect.arrayContaining([1, 2]));
  });

  afterAll(() => {
    promptSpy.mockReset();
  });
});
