// function changeBackgrounfColor(bgc) {
//   document.body.style.backgroundColor = bgc;
// }

// const buttons = document.querySelectorAll(".button");
// buttons.forEach((button) => {
//   const color = button.getAttribute("id");
//   button.addEventListener("click", () => changeBackgrounfColor(color));
//   // button.addEventListener("click", function (e) {
//   //   console.log(e);
//   //   console.log(e.target.id);
//   // });
// });
///////////////////////////////////////////////////////////////////////////////////////////////
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    document.body.style.backgroundColor = e.target.id;
  });
});
