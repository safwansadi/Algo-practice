function subArraySum(array, targetNumber) {
  let sum = array[0];
  let start = 0;
  let end = 1;
  let length = array.length;

  while (end <= length) {
    while (sum > targetNumber) {
      sum = sum - array[start];
      start++;
    }
    if (sum == targetNumber) {
      return [start, end - 1];
    }

    if (sum < targetNumber) {
      sum = sum + array[end];
    }

    end++;
  }
  return "not found";
}

console.log(subArraySum([1, 1, 1], 2));
