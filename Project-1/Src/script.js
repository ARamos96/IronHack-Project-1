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

  window.addEventListener("keydown", function(event){
   console.log(event.code)
  })
};
