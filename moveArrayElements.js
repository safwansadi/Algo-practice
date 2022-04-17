function move(array, move, at) {
  let temp = array[move];

  let i;
  for (i = move; i >= at; i--) {
    array[i] = array[i - 1];
  }
  array[at] = temp;
  console.log(array);
  return array;
}
move([5, 3, 4, 2, 1], 3, 1);
