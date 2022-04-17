let num1 = [4, 4, 5, 6, 10];
let num2 = [4, 10, 11, 12, 5];
let temp = [];

let res = [];
for (let i = 0; i < 100; i++) {
  temp[i] = 0;
}

for (let i = 0; i < num1.length; i++) {
  temp[num1[i]] = 1;
}

for (let i = 0; i < num2.length; i++) {
  if (temp[num2[i]] == 1) {
    res.push(num2[i]);
  }
}

console.log(temp);
console.log(res);
