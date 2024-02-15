class Game {
    constructor () {
        this.startScreen = document.getElementById("start-screen")
        this.gameScreen = document.getElementById("game-screen")
        this.endScreen = document.getElementById("end-screen")
        this.player = null
        this.height = 700
        this.width = 1000
        this.obstacles = []

        //In order to update both Score & Best Score
        this.scoreElement = document.getElementById("score")
        this.bestScoreElement = document.getElementById("best-score")

        this.score = 0
        this.bestScore = 0

        this.isGameOver = false
        this.gameIntervalId;
        this.gameLoopFrequency = 1000/60 //60fps
    }

    start () {
        //Undisplay start screen
        this.startScreen.style.display = none;

        //Display game screen
        this.gameScreen.style.display = block

        //Set size of game screen
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`

        //Set loop interval
        this.gameIntervalId = setInterval (() => {
            this.gameLoop()
        }, this.gameLoopFrequency)
    }

    gameLoop() {
        this.update()

        if (this.isGameOver) {
            clearInterval(this.gameIntervalId)
        }
    }

    update() {
        //player position/movement

        //Create new pipeline each time one disappears

        //what happens after collision
    }

    endGame() {
        //Remove player + obstacles

        //Undisplay game screen

        //Display end screen
    }
}