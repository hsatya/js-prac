// const myNums = [1, 2, 3];

// let result = myNums.reduce((acc, cv) => {
//   console.log(`Cuurent Value: ${cv} and Accumulator: ${acc}`);
//   return acc + cv;
// }, 0);
// result = myNums.reduce((acc, cv) => acc * cv, 1);

// console.log("Result:", result);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "data science course",
    price: 5999,
  },
  {
    itemName: "js course",
    price: 12999,
  },
];

const totalAmount = shoppingCart.reduce((acc, cv) => acc + cv.price, 0);

console.log(totalAmount);
