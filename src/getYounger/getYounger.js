function fromStrToDate(str) {
  const [day, month, year] = str.split(".");
  return new Date(`${year}-${month}-${day}`);
}

function getYounger(personOne, personTwo) {
  const firstDate = fromStrToDate(personOne);
  const secondDate = fromStrToDate(personTwo);

  return firstDate > secondDate ? personOne : personTwo;
}

module.exports = getYounger;
