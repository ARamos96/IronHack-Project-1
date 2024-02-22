//One class for obtacle going down
class downwardsObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = this.gameScreen.offsetWidth - 80;
    this.top = 0;
    this.width = 80;
    this.height = obstacleHeight()[0];

    //Create img element, for now. If not maybe canvas.
    this.element = document.createElement("img");
    this.element.src = "./Images/downward-steward.png";
    this.element.style.position = "absolute";
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
    this.left -= 3;

    //Update position onscreen
    this.updatePosition();
  }
}

//And another class for obstacle going up
class upwardsObstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.left = this.gameScreen.offsetWidth - 80;

    //Height will depend on screen size, gap between obstacles and height of other obstacle
    this.height = obstacleHeight()[1];

    this.top = 700 - this.height; //Although an upward pipe, img extends downwards. If y were 0, pipe would extend out of the screen
    this.width = 80;

    //Create img element, for now. If not maybe canvas.
    this.element = document.createElement("img");
    this.element.src = "./Images/steward.png";
    this.element.style.position = "absolute";
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
    this.left -= 3;

    //Update position onscreen
    this.updatePosition();
  }
}

function obstacleHeight() {
  const gap = 150;
  const minHeight = 150;
  const maxHeight = 700 - gap - minHeight;

  let downwardsObstacleHeight =
    Math.round(Math.random() * (maxHeight - minHeight)) + minHeight; //This way we ensure height to AT LEAST be equal to minHeight (if math.round = 0)
  let upwardsObstacleHeight = 700 - downwardsObstacleHeight - gap;
  return [downwardsObstacleHeight, upwardsObstacleHeight];
}
