function circulerBruteforce(a, n, ind) {
  let b = Array(2 * n);

  for (i = 0; i < n; i++) b[i] = b[n + i] = a[i];

  // print from ind-th index to
  // (n+i)th index.
  for (i = ind; i < n + ind; i++) console.log(b[i] + " ");
}
let a = ["A", "B", "C", "D", "E", "F"];
let n = 6;
// circulerBruteforce(a, n, 3);

function circulerEfficient(arr = [], ind) {
  for (let i = ind; i < arr.length + ind; i++) {
    console.log(arr[parseInt(i % arr.length)] + "");
  }
}
circulerEfficient(["a", "b", "c", "d", "e", "f"], 3);
