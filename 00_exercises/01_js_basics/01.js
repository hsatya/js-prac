// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDT = new Date();

const daysObj = {
  0: "Sunday",
  1: "Monday",
  2: "TuesDay",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const today = daysObj[currentDT.getDay()];

let currentHour = currentDT.getHours();
const ampm = currentHour > 12 ? "PM" : "AM";

// currentHour = currentHour % 12;
// currentHour = currentHour ? currentHour : 12;

currentHour = currentHour % 12 || 12;

let currentMin = currentDT.getMinutes();
let currentSecs = currentDT.getSeconds();

currentMin = currentMin < 10 ? "0" + currentMin : currentMin;
currentSecs = currentSecs < 10 ? "0" + currentSecs : currentSecs;

console.log(
  `Today is : ${today}\nCurrent time is : ${currentHour} ${ampm} : ${currentMin} : ${currentSecs}`
);
