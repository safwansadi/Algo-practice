var arr_clone = (array) => array.slice(0);
console.log(arr_clone([1, 2, 4, 0]));
console.log(arr_clone([1, 2, [4, 0]]));

//output : [1,2,4,0]
//[1,2,[4,0]]
