function rightTriangle(n, symbolToPrint) {
  for (let i = 1; i <= n; ++i) {
    let myStr = "";
    for (let j = 1; j <= i; ++j) {
      myStr += symbolToPrint;
    }
    console.log(myStr);
  }
}

rightTriangle(5, "#");
