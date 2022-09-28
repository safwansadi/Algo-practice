function findMaxMin(array) {
  let max = array[0];
  let min = array[0];

  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
    if (min > array[i]) {
      min = array[i];
    }
  }

  console.log("minimum", min);
  console.log("maximum", max);

  let avg = (max + min) / 2;

  console.log("avg =", avg);

  return "avg " + avg;
}

console.log(findMaxMin([5, 3, 9, 10, 4, 5, 2]));
