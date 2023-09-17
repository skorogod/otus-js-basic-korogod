function checkEmail(str) {
  const regex = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;
  return regex.test(str);
}

module.exports = checkEmail;
