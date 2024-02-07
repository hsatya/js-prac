// let a = 3;

// let print = () => {
//   console.log(a);
// };

// print();

function one() {
  const username = "Harshit";
  function two() {
    const website = "youtunbe";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
};
