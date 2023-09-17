const getYounger = require("./getYounger");

describe("getYounger", () => {
  let personOne;
  let personTwo;
  it("04.09.1997 is younger than 23.10.1996", () => {
    personOne = "04.09.1997";
    personTwo = "23.10.1996";
    expect(getYounger(personOne, personTwo)).toBe(personOne);
  });
});
