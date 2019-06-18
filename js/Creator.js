// Maze Creator Class
class Creator {
  constructor() {
    this.width = 0;
    this.height = 0;
    this.x = Math.floor(Math.random() * 1400) * -1;
    this.y = Math.floor(Math.random() * 900) - 300;
    this.vx = CREATOR_VELOCITY;
    this.state = {
      square: true,
      rectangleX: false,
      rectangleY: false
    };
  }

  drawCreator(width, length) {
    this.width = width;
    this.height = length;
    //console.log('x: ',this.width, 'y: ',this.height)
    ctx.save();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, width, length);
    ctx.restore();
  }
  draw(ctx) {
    if (game.gameStarted && !game.gameOver) {
      if (this.state.square) {
        this.drawCreator(30, 30);
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
  // if (this.state.rectangleX) {
  //   this.drawCreator(90, 45);
  // }
  // if (this.state.rectangleY) {

  //   this.drawCreator(45, 90);
  //   // }
  // }
  // }

  //   randomYMovement() {
  //     if(this.y - this.height > 50) {
  //     this.vy = this.vy - 0.01
  //     }
  //     else {
  //       this.vy = this.vy  + 0.01
  //     }
  // }

  update() {
    if (game.gameStarted && !game.gameOver && !creatorReachedEnd()) {
      this.x += this.vx;
    }
    //FIXME: Super simple and sucking solution for the collision check. It overlaps.
  }
}
