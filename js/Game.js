class Game {
  constructor() {
    this.blackToWhite = !flipped ? 'black' : 'white' ;
    this.whiteToBlack = !flipped ? 'white' : 'black';
    this.x = 0;
    this.y = 0;
    this.width = CANVAS_WIDTH;
    this.height = CANVAS_HEIGHT;
    this.gameStarted = false;
    this.gameOver = false;
    this.playerWon = false;
    this.mazeInPlace = false;
    this.startIndex = 0;
    this.endIndex = 0;
    this.score = 0;
    this.timer = GAME_TIME;
    this.playerName = ''
  }
  draw(ctx) {
    if (!this.gameStarted && !this.gameOver) {
      this.drawNewGameScreen();
    } else if (this.gameOver) {
      this.drawGameOverScreen();
    } else if (this.gameStarted && this.playerWon) {
      this.drawNextScreen();
    }
    if (this.mazeInPlace && !this.playerWon && !this.gameOver) {
      this.drawGoal();
    }
  }
  drawGameOverScreen() {
    ctx.save();
    ctx.fillStyle = this.blackToWhite;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "120px no-continue";
    ctx.textAlign = "center";
    ctx.fillStyle = this.whiteToBlack;
    ctx.fillText("GAME OVER", this.width / 2, this.height / 2);
    ctx.font = "40px no-continue";
    ctx.fillText("PRESS SPACE", this.width / 2, this.height - 200);
    ctx.restore();
  }
  drawNewGameScreen() {
    ctx.save();
    ctx.fillStyle = this.whiteToBlack;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "120px no-continue";
    ctx.textAlign = "center";
    ctx.fillStyle = this.blackToWhite;
    ctx.fillText("NEW GAME", this.width / 2, this.height / 2);
    ctx.font = "40px no-continue";
    ctx.fillText(
      "PRESS SPACE TO START A NEW GAME",
      this.width / 2,
      this.height - 200
    );
    ctx.font = "25px no-continue";
    ctx.fillText(
      "USE ARROWS TO MOVE PLAYER",
      this.width / 2,
      this.height - 140
    );
    ctx.restore();
  }
  drawNextScreen() {
    ctx.save();
    ctx.fillStyle = this.blackToWhite;
    ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
    ctx.beginPath();
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.font = "120px no-continue";
    ctx.textAlign = "center";
    ctx.fillStyle = this.whiteToBlack;
    ctx.fillText("NEXT", this.width / 2, this.height / 2);
    ctx.font = "40px no-continue";
    ctx.fillText("PRESS SPACE", this.width / 2, this.height - 200);
    ctx.restore();
  }

  checkForGameSet() {
    if (!this.mazeInPlace && !this.playerWon) {
      if (creatorReachedEnd() && maze.x === 0) {
        this.startIndex = indexOfFirstCreator();
        this.endIndex = indexOfLastCreator();
        player.x = creators[game.startIndex].x;
        player.y = creators[game.startIndex].y;
        this.mazeInPlace = true;
      }
    }
  }
  drawGoal() {
    //console.log('x: ',this.width, 'y: ',this.height)
    ctx.save();
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.fillRect(creators[this.endIndex].x, creators[this.endIndex].y, 20, 20);
    ctx.restore();
  }

  checkForPlayerDefeat() {
    if (this.timer <= 0) {
      //player.x + player.width < 0) {
      this.gameOver = true;
      this.gameStarted = false;
      clearInterval(timerInterval);
    }
  }
  checkForPlayerWin() {
    if (
      creators[this.endIndex].left() <= player.x &&
      player.x <= creators[this.endIndex].right() &&
      creators[this.endIndex].top() <= player.y &&
      player.y <= creators[this.endIndex].bottom()
    ) {
      console.log("playerWin");
      this.playerWon = true;
      this.mazeInPlace = false;
      console.log(this.mazeInPlace);
    }
  }
  updateTimer() {
    let str = "000" + String(this.timer);
    let toAppend = "TIMER: " + str.substring(str.length - 4, str.length);
    $timer.innerText = toAppend;
  }

  logScoreOnGameOver() {
    if(this.gameOver && !this.playerName) {
      this.playerName = prompt('Type your name here')
      setItem('playerName',this.playerName)
      setItem('score', this.score)
    }
  }

  update() {
    this.checkForPlayerDefeat();
    this.checkForPlayerWin();
    this.checkForGameSet();
    this.updateTimer();
    this.logScoreOnGameOver()
  }
}
