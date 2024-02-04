function hashBoard(n) {
  let myStr = "";
  const blank = " ";
  const hash = "#";
  let flag = true;

  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; j++) {
      if (flag) myStr += blank;
      else myStr += hash;
      flag = !flag;
    }
    myStr += "\n";
  }

  console.log(myStr);
}

function createChessBoard(size) {
  let chessBoard = "";
  for (let row = 0; row < size; ++row) {
    for (let col = 0; col < size; ++col) {
      chessBoard += (row + col) % 2 === 0 ? " " : "#";
    }
    chessBoard += "\n";
  }
  console.log(chessBoard);
}

createChessBoard(8);
