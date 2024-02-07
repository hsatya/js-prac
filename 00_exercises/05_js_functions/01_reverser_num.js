// Write a JavaScript function that reverses a number.

function reverseNum(num) {
  let reverse = 0;
  while (num != 0) {
    let rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }
  return reverse;
}

function reverseNum2(num) {
  let myStr = String(num).split("").reverse().join("");
  return Number(myStr);
}

console.log(reverseNum(1234));
console.log(reverseNum2(1234));
