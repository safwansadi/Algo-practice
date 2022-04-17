var twoSum = function (nums, target) {
  const indices = {};

  nums.forEach((item, index) => {
    indices[item] = index;
  });

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    console.log([index, indices[complement]]);

    if (indices[complement] !== undefined && indices[complement] !== index) {
      //console.log([index, indices[complement]]);
      return [index, indices[complement]];
    }
  }
};

twoSum([2, 5, 3, 6], 8);
