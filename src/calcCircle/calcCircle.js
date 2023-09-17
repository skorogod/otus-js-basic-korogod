function calcCircle(r) {
  const square = Math.PI * r ** 2;
  console.log(square.toFixed(2));
  const circumference = 2 * Math.PI * r;
  console.log(circumference.toFixed(2));
}

module.exports = calcCircle;
