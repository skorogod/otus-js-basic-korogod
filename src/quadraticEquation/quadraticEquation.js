function quadraticEquation() {
  const a = Number(window.prompt("enter a:"));
  const b = Number(window.prompt("enter b:"));
  const c = Number(window.prompt("enter c:"));

  const D = b ** 2 - 4 * a * c;

  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  return [x1, x2];
}

module.exports = quadraticEquation;
