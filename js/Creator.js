// Maze Creator Class
class Creator {
  constructor() {
    this.width = 30;
    this.height = 30;
    this.x = Math.floor(Math.random() * 1200);
    this.y = Math.floor(Math.random() * 600);
    this.vx = CREATOR_VELOCITY;
    this.state = {
      square: true,
      rectangleX: false,
      rectangleY: false
    };
  }

  drawCreator() {
    //console.log('x: ',this.width, 'y: ',this.height)
    ctx.save();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
  draw(ctx) {
    if (game.gameStarted && !game.gameOver) {
      if (this.state.square) {
        this.drawCreator();
      }
    }
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  update() {
    if (game.gameStarted && !game.gameOver && !creatorReachedEnd()) {
      this.x += this.vx;
    }
  }
  }
