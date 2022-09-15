let compare = (data, dataToMatch) => {
  return data.reduce(
    (result, value) => result + dataToMatch.includes(value),
    0
  );
};

console.log(compare([2, 3, 4, 5], [5, 7, 2, 8]));
