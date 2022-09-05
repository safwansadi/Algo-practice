function printDigits(inputNumber) {
  let array = [];
  let sum = 0;
  let number = inputNumber;

  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    array.push(digit);
    //   console.log("Digit = ",digit );
  }

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const avg = sum / array.length;

  console.log(avg);

  console.log(array);

  return avg;
}
console.log(printDigits(565));
