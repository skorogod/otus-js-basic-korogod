const checkPhone = require("./checkPhone");

describe("checkPhone", () => {
  it("checkPhone is a function", () => {
    expect(checkPhone).toBeInstanceOf(Function);
  });

  it("+79187524422 is a phone", () => {
    expect(checkPhone("+79187524422")).toBeTruthy();
  });

  it("9187524422 is aphone", () => {
    expect(checkPhone("9187524422")).toBeTruthy();
  });

  it("7(918)752-44-22 is a phone", () => {
    expect(checkPhone("7(918)752-44-22")).toBeTruthy();
  });

  it("7(918)75a2r22-44-22 is not a phone", () => {
    expect(checkPhone("7(918)75a2r22-44-22")).toBeFalsy();
  });
});
