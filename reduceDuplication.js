function uniqify(array = []) {
  let uniqArray = [];
  array.forEach((element) => {
    if (!uniqArray.includes(element)) {
      uniqArray.push(element);
    }
  });
  console.log(uniqArray);
  return uniqArray;
}

uniqify([5, 5, 7, 6, 7, 8, 5]);
