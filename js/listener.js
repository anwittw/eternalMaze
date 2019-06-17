

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
    player.vx = -5;
  }
  // right
  if (event.keyCode === 39) {
    player.vx = 5;
  }
  if (event.keyCode === 38) {
    player.vy = -5;
  }
  if (event.keyCode === 40) {
    player.vy = 5;
  }
  if (event.keyCode === 32) {
    console.log("space!")
      startNewGame()
    player.updatePlayerState()
  }
};
