function getSeconds() {
  const date = new Date();
  const diff = (Date.now() - date.setHours(0, 0, 0, 0)) / 1000 / 60;
  console.log(diff.toFixed(0));
}

module.exports = getSeconds;
