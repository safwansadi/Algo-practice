let num1 = [4, 4, 5, 6, 10];
let num2 = [4, 10, 11, 12, 5];
let temp = [];

for (let i = 0; i < num2.length; i++) {
  for (let j = 0; j < num1.length; j++)
    if (num2[i] == num1[j]) {
      temp.push(num2[i]);
      break;
    }
}

console.log(temp);
