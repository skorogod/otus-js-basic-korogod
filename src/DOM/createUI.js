function createUI(el) {
  const input = document.createElement("input");
  const addBtn = document.createElement("button");
  addBtn.style.display = "hidden";
  const ul = document.createElement("ul");

  ul.classList.add("comments-list");

  for (let i = 0; i < 3; i++) {
    const p = document.createElement("p");
    p.innerHTML = `start${i + 1}`;
    ul.append(p);
  }

  el.append(input);
  el.append(addBtn);
  el.append(ul);

  input.addEventListener("input", () => {
    if (input.value) {
      addBtn.style.display = "inline";
    } else {
      addBtn.style.display = "hidden";
    }
  });

  addBtn.addEventListener("click", () => {
    const comments = el.querySelector(".comments-list");
    const newComment = document.createElement("p");

    newComment.innerHTML = input.value;

    comments.append(newComment);

    if (comments.childElementCount > 5) {
      comments.removeChild(comments.children[0]);
    }
  });
}

module.exports = createUI;
