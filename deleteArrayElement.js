let array = [2, 4, 5, 6];

// pop to delete from last index
array.pop();
console.log(array);

// use shift to delete from first index
array.shift();
console.log(array);

//use splice to remove from middle
array.splice(1, 1); // splice(idx, no of element to delete)
console.log(array);
