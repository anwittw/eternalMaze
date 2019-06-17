class Maze {
  constructor() {
    this.x = CANVAS_WIDTH;
    this.reset = false;
  }
  draw(ctx) {
    if (game.gameStarted && !game.gameOver) {
      ctx.save();
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.fillRect(this.x, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      ctx.translate(this.x, this.y);
      ctx.restore();
    }
  }
  //FIXME: New MAze not working correctly!
  update() {
    console.log(this.x);
    if (game.gameStarted && !game.gameOver && this.x > 0) {
      this.x += MAZE_VELOCITY;
    }
    // if (creatorReachedEnd() && this.x == 0) {
    //   this.x = 1200;
    // }
  }
}
