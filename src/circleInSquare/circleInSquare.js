function circleInSquare(circle, square) {
  return Math.sqrt(square) >= Math.sqrt((circle * 4) / Math.PI);
}

module.exports = circleInSquare;
