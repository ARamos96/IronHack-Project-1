class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");
    this.player = new Player(
      this.gameScreen,
      150,
      300,
      50,
      120,
      "/Images/jimmy-jump.png"
    );
    this.height = 700;
    this.width = 1000;
    this.upwardObstacles = new upwardsObstacle(this.gameScreen);
    this.downwardObstacles = new downwardsObstacle(this.gameScreen);

    //In order to update both Score & Best Score
    this.scoreElement = document.getElementById("score");
    this.bestScoreElement = document.getElementById("best-score");

    this.score = 0;
    this.bestScore = 0;

    this.isGameOver = false;
    this.gameIntervalId;
    this.refreshRate = 1000 / 60; //60fps

    this.obstacleIntervalId;
  }

  start() {
    //Undisplay start screen
    this.startScreen.style.display = "none";

    //Set size of game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //Display game screen
    this.gameScreen.style.display = "block";

    //Set loop interval
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.refreshRate);
  }

  gameLoop() {
    this.update();

    if (this.isGameOver) {
      clearInterval(this.gameIntervalId);
    }
  }

  update() {
    //player position/movement
    this.player.move();

    this.upwardObstacles.move();
    this.downwardObstacles.move();

    //Create new pipeline each time one disappears

    /*if (this.downwardObstacles.length < 5) {
      this.downwardObstacles.push(new downwardsObstacle(this.gameScreen));
    }*/

    /*if (this.upwardObstacles.length < 1) {
      this.upwardObstacles.push(new upwardsObstacle(this.gameScreen));
    }*/
    //what happens after collision
  }

  endGame() {
    //Remove player + obstacles
    this.player.element.remove();

    this.isGameOver = true;

    //Undisplay game screen
    this.gameScreen.style.display = "none";

    //Display end screen
    this.endScreen.style.display = "block";
  }
}
