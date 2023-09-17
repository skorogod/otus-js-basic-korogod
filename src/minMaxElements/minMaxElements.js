function minMaxElements(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  console.log(
    `min = ${sortedArr[0]}, max = ${sortedArr[sortedArr.length - 1]}`,
  );
}

module.exports = minMaxElements;
