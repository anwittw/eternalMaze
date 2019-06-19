class Maze {
  constructor() {
    this.x = CANVAS_WIDTH;
    this.reset = false;
    this.blackToWhite = "black";
  }
  draw(ctx) {
    if (game.gameStarted && !game.gameOver) {
      ctx.save();
      ctx.fillStyle = this.blackToWhite;
      ctx.beginPath();
      ctx.fillRect(this.x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.translate(this.x, this.y);
      ctx.restore();
    }
  }
  update() {
    if (game.gameStarted && !game.gameOver && this.x > 0) {
      this.x += MAZE_VELOCITY;
    }
  }
}
