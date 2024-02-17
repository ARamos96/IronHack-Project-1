window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    game = new Game();

    game.start();
  }

  startButton.onclick = function () {
    startGame();
  };

  function restartGame() {
    location.reload();
  }

  restartButton.onclick = function () {
    restartGame();
  };

  startButton.onclick = function () {
    startGame();
  };
};
