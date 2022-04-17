let text;

const isEven = (numb) => {
  let value = parseInt(numb);
  let even = value % 2 == 0 ? true : false;
  return even;
};

function addDash(str) {
  let string = [];
  for (let char = 0; char <= str.length - 1; char++) {
    if (isEven(str[char]) == true) {
      string.push(str[char], "-");
    } else {
      string.push(str[char]);
    }
  }
  console.log(string.join(""));
}

isEven("5");
addDash("244974");
