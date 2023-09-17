const compareValues = require("./compareValues");

describe("compareValues", () => {
  it("check compareValues is function", () => {
    expect(compareValues).toBeInstanceOf(Function);
  });

  it("5 more than 2", () => {
    expect(compareValues(5, 3)).toBe(5);
  });

  it("2 is equal to 2", () => {
    expect(compareValues(2, 2)).toBe("Values are equal");
  });
});
