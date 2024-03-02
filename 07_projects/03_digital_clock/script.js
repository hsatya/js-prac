const clock = document.querySelector("#clock");

// let hours = dateTime.getHours();
// let minutes = dateTime.getMinutes();
// let seconds = dateTime.getSeconds();

// let timeNow = `${hours}:${minutes}:${seconds}`;

setInterval(() => {
  const dateTime = new Date();
  clock.innerHTML = dateTime.toLocaleTimeString();
}, 1000);
