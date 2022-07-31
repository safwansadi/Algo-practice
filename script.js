let num1 = [4, 4, 5, 6, 5];
let num2 = [4, 10, 6, 12, 5];
let temp = [];

for (let i = 0; i < num2.length; i++) {
  for (let j = 0; j < num1.length; j++)
    if (num2[i] == num1[i]) {
      temp.push(num2[i]);
      break;
    }
}

console.log(temp);
