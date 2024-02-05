const mySym = Symbol("key1");

const jsUser = {
  name: "Harshit",
  "full name": "Harshit Satya",
  [mySym]: "mykey1",
  age: 37,
  location: "Khargone",
  email: "harshit@google.com",
  isLoggedIn: false,
};

jsUser.email = "shanki@chatgpt.com";

// Object.freeze(jsUser);

// jsUser.name = "Shanki";

jsUser.greetings = function () {
  console.log("Hello");
};

jsUser.greetingsTwo = function () {
  console.log("Hello " + this["full name"]);
};

console.log(jsUser);
// console.log(jsUser.greetings);
// jsUser.greetings();
// jsUser.greetingsTwo();
