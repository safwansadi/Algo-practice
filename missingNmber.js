function missingNumber(nums = []) {
  let ans;
  let temp = [];
  let N = 1e6 + 2;

  for (let i = 0; i < N; i++) {
    temp[i] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    temp[nums[i]] = false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (temp[i] == true) {
      ans = i;
      break;
    }
  }
  return ans;
}

console.log(missingNumber([0, 1, 2, 3, 5]));
