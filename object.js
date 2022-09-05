// function initializeObjecte(attributes, where, include, order, offset, limit) {
//   let obj = {};

//   attributes ? (obj["attributes"] = attributes && attributes) : null;
//   where ? (obj["where"] = where && where) : null;
//   include ? (obj["include"] = include && include) : null;

//   return obj;
// }

// let output = initializeObjecte();

// console.log(output);

let arr1 = [1, 2, 3, 4, 5],
  arr2 = [3, 4, 5, 6, 7],
  compare = (a1, a2) => arr1.filter((v) => arr2.includes(v)).length;

console.log(compare(arr1, arr2));
