function userAdmin(user) {
  const userCopy = { ...user };
  userCopy.role = "admin";
  return userCopy;
}

module.exports = userAdmin;
