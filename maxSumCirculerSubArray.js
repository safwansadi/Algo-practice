// javascript program for maximum contiguous circular sum problem

function kadane(a, n) {
  var res = 0;
  var x = a[0];
  for (i = 0; i < n; i++) {
    res = Math.max(a[i], res + a[i]);
    x = Math.max(x, res);
  }
  return x;
}

// lets write a function for calculating max sum in circular manner as discuss
// above
function reverseKadane(a, n) {
  var total = 0;
  // taking the total sum of the array elements
  for (i = 0; i < n; i++) {
    total += a[i];
  }
  // inverting the array
  for (i = 0; i < n; i++) {
    a[i] = -a[i];
  }
  // finding min sum subarray
  var k = kadane(a, n);
  // max circular sum
  var ress = total + k;
  // to handle the case in which all elements are negative
  if (total == -k) {
    return total;
  } else {
    return ress;
  }
}

var a = [11, 10, -20, 5, -3, -5, 8, -13, 10];
var n = 9;
if (n == 1) {
  console.log("Maximum circular sum is " + a[0]);
} else {
  console.log(
    "Maximum circular sum is " + Math.max(kadane(a, n), reverseKadane(a, n))
  );
}
