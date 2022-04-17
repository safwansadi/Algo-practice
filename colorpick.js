// let array = [];

function colors(array) {
  const [st, nd, rd, th] = ["st", "nd", "rd", "th"];
  let i;
  for (i = 0; i < array.length; i++) {
    if (i + 1 < 4) {
      if (i + 1 == 1) {
        console.log(`${i + 1 + st} value is ${array[i]}`);
      } else if (i + 1 == 2) {
        console.log(`${i + 1 + nd} value is ${array[i]}`);
      } else {
        console.log(`${i + 1 + rd} value is ${array[i]}`);
      }
    } else {
      console.log(`${i + 1 + th} value is ${array[i]}`);
    }
  }
}
colors(["red", "green", "blue", "purple"]);
