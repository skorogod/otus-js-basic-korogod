function averageFromTo() {
  const n = Number(window.prompt("Enter N: "));
  let summ = 0;
  let count = 0;

  for (let i = 1; i <= n; i += 2) {
    summ += i;
    count += 1;
  }

  return summ / count;
}

module.exports = averageFromTo;
