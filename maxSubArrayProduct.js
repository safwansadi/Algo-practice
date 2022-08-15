function maxSubarrayProduct(arr, n) {
  // Initializing result
  let result = arr[0];

  for (let i = 0; i < n; i++) {
    let mul = arr[i];
    // traversing in current subarray
    for (let j = i + 1; j < n; j++) {
      // updating result every time
      // to keep an eye over the maximum product
      result = Math.max(result, mul);
      mul *= arr[j]; //mul = mul * arr[j]
      //   console.log(mul);
    }
    // updating the result for (n-1)th index.
    result = Math.max(result, mul);
  }
  return result;
}

// Driver code

let arr = [1, -2, -3, 0, 7, -8, -2];
let n = arr.length;
console.log(maxSubarrayProduct(arr, n));
// document.write("Maximum Sub array product is " + maxSubarrayProduct(arr, n));

//efficient
function maxSubarrayProduct(arr, n) {
  // max positive product
  // ending at the current position
  let max_ending_here = arr[0];

  // min negative product ending
  // at the current position
  let min_ending_here = arr[0];

  // Initialize overall max product
  let max_so_far = arr[0];

  /* Traverse through the array.
    the maximum product subarray ending at an index
    will be the maximum of the element itself,
    the product of element and max product ending previously
    and the min product ending previously. */
  for (let i = 1; i < n; i++) {
    let temp = Math.max(
      Math.max(arr[i], arr[i] * max_ending_here),
      arr[i] * min_ending_here
    );
    min_ending_here = Math.min(
      Math.min(arr[i], arr[i] * max_ending_here),
      arr[i] * min_ending_here
    );
    max_ending_here = temp;
    max_so_far = Math.max(max_so_far, max_ending_here);
  }
  return max_so_far;
}

// Driver code
let array = [1, -2, -3, 0, 7, -8, -2];
let length = arr.length;
document.write(
  "Maximum Sub array product is " + maxSubarrayProduct(array, length)
);
