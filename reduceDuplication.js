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
