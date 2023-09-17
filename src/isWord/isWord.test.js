const isWord = require("./isWord");

describe("isWord", () => {
  it("isWord is a function", () => {
    expect(isWord).toBeInstanceOf(Function);
  });

  it('"hello world" contain 2 words', () => {
    expect(isWord("hello world")).toBeFalsy();
  });

  it('"hello" contain 1 word', () => {
    expect(isWord("hello")).toBeTruthy();
  });

  it('"hello " contain 1 word', () => {
    expect(isWord("hello")).toBeTruthy();
  });

  it('" hello " contain 1 word', () => {
    expect(isWord(" hello ")).toBeTruthy();
  });
});
