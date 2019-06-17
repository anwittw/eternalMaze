class Player {

  constructor() {
    this.width = 0;
    this.height = 0;
    this.x = 70;
    this.y = CANVAS_HEIGHT / 2;
    this.vx = 0;
    this.vy = 0;
    this.score = 0;
    this.state = {
      square: true,
      rectangleX: false,
      rectangleY: false
    };
  }

  drawPlayer(color, x, y) {
    this.width = x;
    this.height = y;
    //console.log('x: ',this.width, 'y: ',this.height)
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, x, y);
    ctx.translate(this.x, this.y);
    ctx.restore();
  }

  updatePlayerState() {
    if (this.state.square) {
      this.state.square = !this.state.square;
      this.state.rectangleX = !this.state.rectangleX;
    } else if (this.state.rectangleX) {
      this.state.rectangleX = !this.state.rectangleX;
      this.state.rectangleY = !this.state.rectangleY;
    } else if (this.state.rectangleY) {
      this.state.rectangleY = !this.state.rectangleY;
      this.state.square = !this.state.square;
    }
    console.log(this.state);
  }

  draw(ctx) {
    if(game.gameStarted && !game.gameOver) {
    if (this.state.square) {
      this.drawPlayer(SQUARE_COLOR, 15,15);
    }
    if (this.state.rectangleX) {
      this.drawPlayer(RECTANGLE_X_COLOR, 90, 45);
    }
    if (this.state.rectangleY) {
      this.drawPlayer(RECTANGLE_Y_COLOR, 45, 90);
    }
  }
  }

  update() {
   if(game.gameStarted && !game.gameOver) {
     if(!checkForCreatorOverlap()){
    if(!checkCollision()) {
     this.x += this.vx;
     this.y += this.vy;
    }
    //FIXME: Super simple and sucking solution for the collision check. It overlaps.
    else {
    this.x = -player.width +maze.x + (this.vx / 2);
    this.y += this.vy;
  }
}
  else {
    this.x += this.vx;
    this.y += this.vy;
  }
}
  }
}
  

