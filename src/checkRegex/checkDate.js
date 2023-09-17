function checkDate(str) {
  const regex = /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]/;
  return regex.test(str);
}

module.exports = checkDate;
