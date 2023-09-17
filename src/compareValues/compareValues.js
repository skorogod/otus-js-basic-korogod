function compareValues(a, b) {
  if (a === b) {
    return "Values are equal";
  }

  return a > b ? a : b;
}

module.exports = compareValues;
