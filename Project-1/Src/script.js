window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    game = new Game();

    game.start();
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  function restartGame() {
    location.reload();
  }

  restartButton.onclick = function () {
    restartGame();
  };

  startButton.onclick = function () {
    startGame();
  };

  window.addEventListener("keydown", function (event) {
    if (event.code == "Space") {
      game.player.directionY = -15;
    }
  });

  //We are stopping the player from moving once the key is released
  window.addEventListener("keyup", function (event) {
    if (event.code == "Space") {
      game.player.directionY = 0;
    }
  });
};
