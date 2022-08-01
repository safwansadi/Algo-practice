function rotateArray(arr, k) {
  let tempArray = [];
  for (let i = arr.length - k; i < arr.length; i++) {
    tempArray.push(arr[i]);
  }
  for (let i = 0; i < arr.length - k; i++) {
    tempArray.push(arr[i]);
  }

  return tempArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 2));
