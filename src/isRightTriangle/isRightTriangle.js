function isoscelesTriangle(a, b, c) {
  const sides = [a, b, c].sort((firstEl, secondEl) => secondEl - firstEl);

  if (sides[0] ** 2 === sides[1] ** 2 + sides[2] ** 2) {
    return true;
  }

  return false;
}

module.exports = isoscelesTriangle;
