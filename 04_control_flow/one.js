// if

// let balance = 20000000;

// if (balance > 500)
//   console.log("test"), console.log("test2"), console.log(balance);

// Truthy and Falsy Values
// const userEmail = "h@harshit.com";

// if (userEmail) {
//   console.log("Got user email.");
// } else {
//   console.log("Don't have user email.");
// }

// console.log("".length);

// falsy
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", " ", "false", {}, [], function(){}

// Nullish Coalescing Operator (??): null undefined
let res = 0 || 1;

res = 0 ?? 1;
res = null ?? 1;
console.log(res);
