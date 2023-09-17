function checkPhone(str) {
  const regex =
    /^[\+]?[1-9]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{2}$/;
  return regex.test(str);
}

module.exports = checkPhone;
