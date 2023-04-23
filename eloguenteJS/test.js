let board = "";
let size = 10;
for (let line = 0; line < size; line++) {
  for (let j = 0; j < size; j++) {
    if ((line + j) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}
console.log(board);
