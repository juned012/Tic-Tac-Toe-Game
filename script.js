let boxes = document.querySelectorAll(".box");
let currentPlayer = "X";
let isGameStart = true;
const winnerPlayer = document.getElementById("winner");

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinning() {
  for (let pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerHTML === currentPlayer &&
      boxes[b].innerHTML === currentPlayer &&
      boxes[c].innerHTML === currentPlayer
    ) {
      winnerPlayer.innerText = `Player ${currentPlayer} is Wins🎉✨!`;
      isGameStart = false;
      return true;
    }
  }
  return false;
}

function checkDraw() {
  const isDraw = Array.from(boxes).every((box) => box.innerHTML !== "");
  if (isDraw && isGameStart) {
    winnerPlayer.innerText = "It's a Draw!";
    isGameStart = false;
  }
}

function renderBoard() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (isGameStart && box.innerHTML === "") {
        box.innerHTML = currentPlayer;
        const hasWinner = checkWinning();
        if (!hasWinner) {
          checkDraw();
          if (isGameStart) {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            updateCurrentPlayer();
          }
        }
      }
    });
  });
}

function updateCurrentPlayer() {
  const currentPlayers = document.getElementById("currentPlayer");
  currentPlayers.innerText = currentPlayer;
}

function restartGame() {
  currentPlayer = "X";
  isGameStart = true;
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
  winnerPlayer.innerText = "";
  updateCurrentPlayer();
}

const restart = document.getElementById("restartGame");
restart.addEventListener("click", restartGame);

renderBoard();
updateCurrentPlayer();
