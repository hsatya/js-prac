const user = {
  username: "harshit",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "shanki";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "harshit";
//   //   console.log(this);
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "harshit";
//   console.log(this);
//   console.log(this.username);
// };

// chai();

// const chai = () => {
//   let username = "harshit";
//   //   console.log(this.username);
//   console.log(this);
// };

// chai();

// const one = function () {
//   const two = () => {
//     console.log(this);
//   };
//   two();
// };

// one();

// const user2 = {
//   username: "harshit",
//   price: 999,

//   greetings: () => {
//     console.log(this);
//   },
// };

// user2.greetings();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };
// const addTwo = (num1, num2) => (num1 + num2);
// const addTwo = (num1, num2) => num1 + num2;

const returnUserName = () => ({ username: "harshit" });

// console.log(addTwo(2, 3));
console.log(returnUserName());
