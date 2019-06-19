

let $scoreBoard = document.getElementById('score-board')
let $lastScore = document.getElementById('last-score')

let $timer = document.getElementById('timer')

document.onkeyup = event => {
  console.log(event.keyCode);
  // left
  if (event.keyCode === 37) {
    player.vx = 0;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = 0;
  }
  if (event.keyCode === 38) {
    player.vy = 0;
  }
  if (event.keyCode === 40) {
    player.vy = 0;
  }
};

document.onkeydown = event => {
  console.log(event.keyCode);
  // left
  if (event.keyCode === 37) {
    player.vx = -PLAYER_VELOCITY;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = PLAYER_VELOCITY;
  }
  if (event.keyCode === 38) {
    player.vy = -PLAYER_VELOCITY;
  }
  if (event.keyCode === 40) {
    player.vy = PLAYER_VELOCITY;
  }
  if (event.keyCode === 32) {
    console.log("space!")
      startNewGame()
  }
};

canvas.onclick = (e) => {
  console.log(e)
  startNewGame();
}
