function rotateArray(arr, k) {
  let count = 0;
  let tempArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (count < k) {
      count = count + 1;
      tempArray.push(arr[i]);
      arr.splice(i, count);
    }
  }
  console.log(tempArray);
  const result = tempArray.concat(arr);

  return result;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
