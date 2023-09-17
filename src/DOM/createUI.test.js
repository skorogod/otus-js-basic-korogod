const react = require("@testing-library/react");
const createUI = require("./createUI");

describe("createUI", () => {
  let el;

  beforeEach(() => {
    el = document.createElement("div");
    createUI(el);
  });

  it("create html basic", () => {
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector("ul")).toBeTruthy();
    expect(el.querySelectorAll("p").length).toBe(3);
  });

  it("button is hidden where input is empty", () => {
    expect(el.querySelector("button").style.display).toBe("hidden");
  });

  it("button is visible where input is not empty", () => {
    const input = el.querySelector("input");
    react.fireEvent.input(input, { target: { value: "some value" } });
    expect(el.querySelector("button").style.display).toBe("inline");
    react.fireEvent.input(input, { target: { value: "" } });
    expect(el.querySelector("button").style.display).toBe("hidden");
  });

  it("add new paragraph", () => {
    const input = el.querySelector("input");
    const addBtn = el.querySelector("button");
    const ul = el.querySelector("ul");

    expect(ul.querySelectorAll("p").length).toBe(3);

    input.value = "test1";
    addBtn.click();

    expect(ul.querySelectorAll("p").length).toBe(4);

    input.value = "test2";
    addBtn.click();

    expect(ul.querySelectorAll("p").length).toBe(5);

    input.value = "test3";
    addBtn.click();

    const results = [...ul.querySelectorAll("p")].map((item) => item.innerHTML);

    expect(results).toEqual(["start2", "start3", "test1", "test2", "test3"]);
  });
});
