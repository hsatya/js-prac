let myDate = new Date();
// console.log(myDate);

// console.log("string", myDate.toString());
// console.log("string date string", myDate.toDateString());
// console.log("string ISO", myDate.toISOString());
// console.log("string JSON", myDate.toJSON());
// console.log("string LDS", myDate.toLocaleDateString());
// console.log("string LS", myDate.toLocaleString());
// console.log("string TS", myDate.toTimeString());
// console.log("string UTC", myDate.toUTCString());
// console.log(typeof myDate);

// const myNewDate = new Date(2023, 0, 23);
// const myNewDate = new Date(2023, 0, 23, 5, 3);
// const myNewDate = new Date("2023-01-14");
const myNewDate = new Date("01-22-2024");
// console.log(myNewDate.toLocaleString());

const myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
// console.log(myNewDate.getTime() - myTimeStamp);
console.log(Math.floor(Date.now() / 1000));

const newDate = new Date();

newDate.toLocaleString("default", {
  weekday: "long",
});
