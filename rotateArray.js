function rotateArrayShortcut(array) {
  array.unshift(array.pop());
  console.log(array);

  return array;
}

rotateArrayShortcut([1, 2, 3, 4, 5]);

function rotateArray(array, move, at) {
  let temp = array[move];

  let i;
  for (i = move; i >= at; i--) {
    array[i] = array[i - 1];
  }
  array[at] = temp;
  console.log(array);
  return array;
}

let array = [5, 3, 4, 2, 1];

rotateArray(array, array.length - 1, 0);
