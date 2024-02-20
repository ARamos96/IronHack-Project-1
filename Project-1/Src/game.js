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

    this.upwardObstacles.move()
    this.downwardObstacles.move()


    for (let i = 0; i < this.upwardObstacles.length; i++) {
      const upwardObstacle = this.upwardObstacles[i]
      upwardObstacle.move()

    }
    
    for (let i = 0; i < this.downwardObstacles.length; i++) {
      const downwardObstacle = this.downwardObstacles[i]
      downwardObstacle.move()

      //What to do when obstacle exits screen on the left
      if(downwardObstacle.left < 0) {
        //Add 1 point
        this.score++

        //Update score
        this.scoreElement.innerHTML = this.score

        if(this.score > this.bestScore){
          this.bestScore = this.score
          this.bestScoreElement.innerHTML = this.bestScore
        }

        //Remove from screen
        downwardObstacle.element.remove()

        //Remove from array
        this.downwardObstacles.splice(i, 1)

        //Decrease counter because we have 1 less obstacle
        i--
      }

      //Create new steward each time one disappears
      if (this.downwardObstacles.length == 0) {
        this.downwardObstacles.push(new downwardsObstacle(this.gameScreen));
      }
    }



    /*if (this.upwardObstacles.length < 1) {
      this.upwardObstacles.push(new upwardsObstacle(this.gameScreen));
    }*/

    //what happens after collision
    if (this.player.didItCollide(this.downwardObstacles)) {
      this.endGame()
    } else if (this.player.didItCollide(this.upwardObstacles)) {
      this.endGame()
    }

    //End game if player touches screen's border
    if (this.player.top + this.player.height > this.height ||
      this.player.top < 0) {
        this.endGame()
      }

  }

  endGame() {
    //Remove player + obstacles
    this.player.element.remove();

    this.isGameOver = true;

    //Undisplay game screen
    this.gameScreen.style.display = "none";

    //Display end screen
    this.endScreen.style.display = "flex"
    this.endScreen.style.flexDirection = 'column';
    this.endScreen.style.alignItems = 'center';
    this.endScreen.style.justifyContent = 'center';
  }
}
