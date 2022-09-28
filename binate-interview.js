let fruits = ["apple", "banana", "orange", "dates"];
// output = [{vowels: 3, reverse: 'elppa'}, ... ];

let newArray = []; //yes
for (let i = 0; i < fruits.length; i++) {
  let eachFruit = fruits[i].split("").reverse().join("");
  let obj = {
    length: fruits[i].length,
    reverse: eachFruit,
  };
  newArray.push(obj);
}
console.log(newArray);

let s = fruits.map((element) => {
  //did with interviewer's help
  return {
    length: element.length,
    reverse: [...element].reverse().join(""),
  };
});
console.log("s= ", s);

// object and array destructuring - yes

// defination of spread operator - yes

let [x, y] = [1, 2]; //yes
console.log([x, y]);
[x, y] = [y, x];
console.log([x, y]);

let array = [1, 2, 4];

array.shift(0); //yes

console.log(array);

array.splice(); //close

function returnName() {
  //closure defination
  let name = "avs";

  function printName() {
    return name;
  }
  printName();
}
console.log(returnName());

//difference between typeScript and javaScript- yes

//defination of caching with redis usecase- yes

//git rebase origin branchName //close

//git checkout  -b branchName //yes
