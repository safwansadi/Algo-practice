let str = '["pink", "yellow"]';

temp = str.slice(0, str.length);

let arr = JSON.parse(temp);

console.log(arr[0]);
console.log(arr[1]);
