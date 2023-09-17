const userAdmin = require("./userAdmin");

describe("userAdmin", () => {
  let user;
  beforeEach(() => {
    user = { name: "admin" };
  });

  test("check userAdmin is a function", () => {
    expect(userAdmin).toBeInstanceOf(Function);
  });

  test("return {name: 'admin', role: 'admin'}", () => {
    expect(JSON.stringify(userAdmin(user))).toEqual(
      JSON.stringify({ name: "admin", role: "admin" }),
    );
  });
});
