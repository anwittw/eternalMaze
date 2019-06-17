class Game {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.gameStarted = false;
    this.gameOver = false;
    this.mazeInPlace = false;
    this.pathInPlace = false;
  }
  draw(ctx) {
    if (!this.gameStarted && !this.gameOver) {
      this.drawNewGameScreen();
    } else if (this.gameOver) {
      this.drawGameOverScreen();
    }
  }
  drawGameOverScreen() {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "120px no-continue";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("GAME OVER", this.width / 2, this.height / 2);
    ctx.font = "40px no-continue";
    ctx.fillText(
      "PRESS SPACE",
      this.width / 2,
      this.height - 200
    );
    ctx.restore();
  }
  drawNewGameScreen() {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "120px no-continue";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText("NEW GAME", this.width / 2, this.height / 2);
    ctx.font = "40px no-continue";
    ctx.fillText(
      "PRESS SPACE TO START A NEW GAME",
      this.width / 2,
      this.height - 200
    );
    ctx.restore();
  }
  checkForPlayerDefeat() {
    if ("a"==="b") {
      //player.x + player.width < 0) {
      this.gameOver = true;
      this.gameStarted = false;
    }
  }

  update() {
    this.checkForPlayerDefeat();
  }
}
