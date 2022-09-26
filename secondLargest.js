function secondLargest(array) {
  let max = array[0];
  let secondLargest = array[0];
  let idx = 0;

  array.forEach((item, index) => {
    if (max < item) {
      max = item;
      idx = index;
    }
  });

  array.splice(idx, 1);

  array.forEach((item) => {
    if (secondLargest < item) {
      secondLargest = item;
    }
  });

  return secondLargest;
}

console.log(secondLargest([10, 15, 20, 5, 100, 500]));
