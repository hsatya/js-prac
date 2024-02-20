// const coding = ["js", "python", "go", "java", "php", "ruby"];

// const values = [];

// coding.forEach((item) => {
//   if (item.includes("j")) values.push(item);
// });

// console.log(values);

// const myNumbers = Array.from({ length: 10 }, (_, index) => index + 1);

// const newNums = myNumbers.filter((num) => num > 4);
// console.log(newNums);

// const newNums2 = [];
// myNumbers.forEach((item) => {
//   if (item > 4) newNums2.push(item);
// });
// console.log(newNums2);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((book) => book.genre === "History");
userBooks = books.filter((book) => book.publish >= 2000);
userBooks = books.filter(
  (book) => book.publish >= 1995 && book.genre === "History"
);

console.log(userBooks);
