const checkDate = require("./checkDate");

describe("checkDate", () => {
  it("checkDate is a function", () => {
    expect(checkDate).toBeInstanceOf(Function);
  });

  it("2023.08.10 is a date", () => {
    expect(checkDate("2023.08.10")).toBeTruthy();
  });

  it("08-10-2020 is a date", () => {
    expect(checkDate("2023.08.10")).toBeTruthy();
  });

  it("20.01.10 is not a date", () => {
    expect(checkDate("20.01.10")).toBeTruthy();
  });

  it("20245-36.23 is not a date", () => {
    expect(checkDate("20245-36.23")).toBeFalsy();
  });
});
