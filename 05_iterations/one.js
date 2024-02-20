const myArr = Array.from({ length: 20 }, (x, index) => index + 1);
// console.log(myArr);

const someNumbers = { 0: 10, 1: 15, length: 2 };
// console.log(Array.from(someNumbers, (val) => val * 2));

function someArguments() {
  return Array.from(arguments).reduce((sum, num) => sum + num);
}

// console.log(someArguments(1, 2, 3));

function otherFunction() {
  console.log(arguments);
  console.log(Array.from(arguments));
}

// otherFunction("hello", "hai", "danke", "shon");
// otherFunction();
// console.log(Array.from("Hey"));

const map = new Map();
map.set("one", 1);
map.set("two", 2);
// console.log(Array.from(map));

const numbers = [3, 6, 9];
const numbersCopy = Array.from(numbers);
// console.log(numbers == numbersCopy);
// console.log(numbers === numbersCopy);
