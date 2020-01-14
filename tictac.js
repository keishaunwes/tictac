let rowss = document.querySelectorAll(".row");

rowss.forEach(function(rows) {
  rows.addEventListener("click", tictac);
});

let currentPlayer = 0;

function tictac(e) {
  if (currentPlayer % 2 == 0) {
    e.target.textContent = "X";
    currentPlayer++;
} else {
    e.target.textContent = "O";
    currentPlayer++;
}
}
