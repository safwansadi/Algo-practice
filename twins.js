// codeforces 160A

function greedy(arr) {
  const sumOfArr = arr.reduce((acc, val) => acc + val);

  var halfOfSum = Math.ceil(sumOfArr / 2);

  var sortedArr = arr.sort();
  sortedArr = arr.reverse();

  var numberOfCoins = 0,
    sumOfElements = 0;

  for (var coin in sortedArr) {
    sumOfElements += sortedArr[coin];
    numberOfCoins++;

    if (sumOfElements >= halfOfSum) {
      return numberOfCoins;
    }
  }
}
