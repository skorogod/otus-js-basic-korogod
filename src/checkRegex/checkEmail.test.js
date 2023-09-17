const checkEmail = require("./checkEmail");

describe("checkEmail", () => {
  it("checkEmail is a function", () => {
    expect(checkEmail).toBeInstanceOf(Function);
  });

  it("vasya145_7hN@mail.ru is email", () => {
    expect(checkEmail("vasya145_7hN@mail.ru")).toBeTruthy();
  });
});
