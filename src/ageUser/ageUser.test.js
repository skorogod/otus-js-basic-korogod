const ageUser = require("./ageUser");

describe("ageUser", () => {
  const promptSpy = jest.spyOn(window, "prompt");
  let user;

  beforeEach(() => {
    user = { name: "John" };
  });

  test("check ageUser is a function", () => {
    expect(ageUser).toBeInstanceOf(Function);
  });

  test("return {name: 'John', age: 18}", () => {
    promptSpy.mockReturnValue("18");
    expect(JSON.stringify(ageUser(user))).toEqual(
      JSON.stringify({ name: "John", age: 18 }),
    );
  });
  afterAll(() => {
    promptSpy.mockReset();
  });
});
