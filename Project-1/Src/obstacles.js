class Obstacle {
  static tempDownwardsObstacleHeight;
  static tempUpwardsObstacleHeight;

  static generateObstacleHeight() {
    const gap = 130;
    const minHeight = 100;
    const maxHeight = 300;

    Obstacle.tempDownwardsObstacleHeight =
      Math.round(Math.random() * (maxHeight - minHeight)) + minHeight; //This way we ensure height to AT LEAST be equal to minHeight (if math.round = 0)

    Obstacle.tempUpwardsObstacleHeight =
      700 - Obstacle.tempDownwardsObstacleHeight - gap; //Heights are dependent on each other
  }

  constructor(gameScreen, imgSrc, top, height) {
    this.gameScreen = gameScreen;
    this.left = this.gameScreen.offsetWidth - 80;
    this.top = top;
    this.width = 70;
    this.height = height;

    //Create img element, for now. If not maybe canvas.
    this.element = document.createElement("img");
    this.element.src = imgSrc;
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

//One class for obstacle going down
class DownwardsObstacle extends Obstacle {
  constructor(gameScreen) {

    const img = "../Images/downward-steward.png"
    const height = Obstacle.tempDownwardsObstacleHeight
    const top = 0

    super(gameScreen, img, top, height)

  }
}

//And another class for obstacle going up
class UpwardsObstacle extends Obstacle {
  constructor(gameScreen) {

    const img = "../Images/steward.png"
    const height = Obstacle.tempUpwardsObstacleHeight
    const top = 700 - Obstacle.tempUpwardsObstacleHeight

    super(gameScreen, img, top, height)

  }
}