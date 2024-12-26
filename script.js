let boxes = document.querySelectorAll(".box");
let currentPlayer = "X";

function renderBoard() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerHTML === "") {
        box.innerHTML = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateCurrentPlayer();
      }
    });
  });
}

function updateCurrentPlayer() {
  const currentPlayers = document.getElementById("currentPlayer");
  currentPlayers.innerText = `${currentPlayer}`;
}

renderBoard();
updateCurrentPlayer();
