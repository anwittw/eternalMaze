class Maze {
  constructor() {
    this.x = CANVAS_WIDTH + 20;
  }
  draw(ctx) {
    if(game.gameStarted && !game.gameOver) {
    ctx.save();
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.fillRect(this.x, 0, CANVAS_WIDTH * 10000, CANVAS_HEIGHT);
    ctx.translate(this.x, this.y);
    ctx.restore();
    }
  }
  //FIXME: New MAze not working correctly!
  update() {
    if(game.gameStarted && !game.gameOver) {
    this.x += MAZE_VELOCITY;
    if (this.x < -CANVAS_WIDTH) this.x = CANVAS_WIDTH + 20;
  }
}
}
