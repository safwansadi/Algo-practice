var twoSum = function (nums, target) {
  let temp = [];

  let res = [];

  let res2 = [];

  for (let i = 0; i < 100; i++) {
    temp[i] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] > 0) res.push(target - nums[i]);
  }

  for (let i = 0; i < res.length; i++) {
    temp[res[i]] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (temp[nums[i]] == 1) {
      res2.push(nums.indexOf(nums[i]));
    }
  }
  console.log(res2);

  return res2;
};

twoSum([3, 2, 4, 3, 5, 1], 6);
