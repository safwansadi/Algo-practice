function reverseArray(array) {
  let array2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    array2.push(array[i]);
  }
  return array2;
}

function addTwoNumber(l1, l2) {
  const num1 = reverseArray(l1);
  const num2 = reverseArray(l2);
  const sum = +num1.join("") + +num2.join("");

  const sumArray = Array.from(String(sum), Number);

  const result = sumArray.reverse();

  return result;
}

console.log(addTwoNumber([2, 4, 3], [5, 6, 4]));
