function sayMyName() {
  console.log("H");
  console.log("a");
  console.log("r");
  console.log("s");
  console.log("h");
  console.log("i");
  console.log("t");
}

// sayMyName();

function addTwoNums(num1, num2) {
  console.log(num1 + num2);
}
function addTwoNums2(num1, num2) {
  return num1 + num2;
}

// addTwoNums(3, 5);
// const result = addTwoNums2(3, 5);
// console.log(result);

function logginUserMessage(username) {
  if (!username) {
    return "Please enter a user name.";
  }
  return `${username} just logged in.`;
}

// console.log(logginUserMessage("Harshit"));
// console.log(logginUserMessage(""));
// console.log(logginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 1000));

const user = {
  username: "Harshit",
  prices: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "shan",
//   price: 999,
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondArray(getArray) {
  return getArray[1];
}

console.log(returnSecondArray(myNewArray));
