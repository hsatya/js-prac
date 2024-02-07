// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const currentDT = new Date();

let month = currentDT.getMonth() + 1;
let date = currentDT.getDate();
let year = currentDT.getFullYear();

date = date < 10 ? "0" + date : date;
month = month < 10 ? "0" + month : month;

console.log(`${date}/${month}/${year}`);
