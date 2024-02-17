class Game {
  constructor() {
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");
    this.player = new Player(
      this.gameScreen,
      80,
      300,
      50,
      75,
      '/Project-1/Images/jimmy-jump.png'
    );
    this.height = 700;
    this.width = 1000;
    this.upwardObstacles = [];
    this.downwardObstacles = [];

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
    this.startScreen.style.display = 'none';
    
    //Set size of game screen
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //Display game screen
    this.gameScreen.style.display = 'block';

    //Set loop interval
    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.refreshRate);
  }

  gameLoop() {
    this.update();

    if (this.isGameOver) {
      clearInterval(this.gameIntervalId);
      clearInterval(this.obstacleIntervalId);
    }
  }

  update() {
    //player position/movement

    //Create new pipeline each time one disappears

    if (this.downwardObstacles.length < 5) {
      this.obstacleIntervalId = setInterval(() => {
        this.downwardObstacles.push(new downwardsObstacle(this.gameScreen));
      }, 1500);
    }
    
    if (this.upwardObstacles.length < 5) {
      this.obstacleIntervalId = setInterval(() => {
        this.downwardObstacles.push(new upwardsObstacle(this.gameScreen));
      }, 1500);
    }
    //what happens after collision
  }

  endGame() {
    //Remove player + obstacles
    //Undisplay game screen
    //Display end screen
  }
}
