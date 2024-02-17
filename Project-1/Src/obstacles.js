//One class for pipes going down
class downwardsObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = this.gameScreen.offsetWidth - 80;
    this.top = 0;
    this.width = 50;
    this.height = this.obstacleHeight();

    //Create img element, for now. If not maybe canvas.
    this.element = document.createElement("img");
    this.element.src = '/Project-1/Images/downward-steward.png'
      this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    //Append img to HTML
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  move() {
    //Move obstacle left
    this.left -= 5;

    //Update position onscreen
    this.updatePosition();
  }

  obstacleHeight() {
    const gap = 100;
    const minHeight = 150;
    const maxHeight = Game.height - gap - minHeight;

    let downwardsObstacleHeight =
      Math.round(Math.random() * (maxHeight - minHeight)) + minHeight; //This way we ensure height to AT LEAST be equal to minHeight (if math.round = 0)
    return downwardsObstacleHeight;
  }
}

//And another class for pipes going up
class upwardsObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = this.gameScreen.offsetWidth - 80;
    this.top = this.gameScreen.offsetHeight - this.height; //Although an upward pipe, img extends downwards. If y were 0, pipe would extend out of the screen
    this.width = 50;

    //Height will depend on screen size, gap between obstacles and height of other obstacle
    this.height = Game.height - downwardsObstacle.height - 100;

    //Create img element, for now. If not maybe canvas.
    this.element = document.createElement("img");
    this.element.src = '/Project-1/Images/steward.png'
      this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    //Append img to HTML
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  move() {
    //Move obstacle left
    this.left -= 5;

    //Update position onscreen
    this.updatePosition();
  }
}