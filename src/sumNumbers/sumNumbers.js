function sumNumbers() {
  const number = window.prompt("Enter three-digit number: ");
  const numberArray = number.split("");

  console.log(
    numberArray.reduce((prev, current) => Number(prev) + Number(current), 0),
  );
}

module.exports = sumNumbers;
