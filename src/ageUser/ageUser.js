const user = { name: "John" };

function ageUser() {
  const age = window.prompt("enter age");
  user.age = +age;

  return user;
}

module.exports = ageUser;
