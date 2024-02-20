const myNums = Array.from({ length: 10 }, (_, index) => index + 1);

let newNums = myNums.map((num) => num + 10);

newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

console.log(newNums);
