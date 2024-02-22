class Player {
  constructor(gameScreen, left, top, width, height, image) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;

    //Only one axis movement because player only moves vertically.
    this.directionY = 0;

    //Gravity to pull the player down
    this.gravity = -3;

    //Create img element on html
    this.element = document.createElement("img");

    //Pass an URL as an argument to use as source
    this.element.src = image;

    //Define player's position and size on the screen
    this.element.style.position = "absolute";
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    //Append above img to the HTML file
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += this.directionY - this.gravity;

    //No need to establish screen boundaries because if it touches border isGameOver == true

    this.updatePosition();
  }

  didItCollide(obstacle) {
    //In order to check collision we need to know if player element overlaps the obstacle's one
    //So we create a rectangle that exactly fitsx1 the player/obstacles boundaries
    const playerArea = this.element.getBoundingClientRect();
    const obstacleArea = obstacle.element.getBoundingClientRect();

    //We check if obstacles overlap by comparing their vertical and horizontal position,
    //and return true/false depending on output
    if (
      playerArea.top < obstacleArea.bottom &&
      playerArea.bottom > obstacleArea.top &&
      playerArea.right > obstacleArea.left &&
      playerArea.left < obstacleArea.right
    ) {
      return true;
    } else {
      return false;
    }
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }
}
