let frame = 0; // The frame counter
let player = new Player();
let maze = new Maze();
let game = new Game();

function animation() {
  //console.log('ping')
  updateEverything();
  drawEverything(ctx);
  window.requestAnimationFrame(animation);
}
animation();

// drawEverything draws elements on the canvas
// It shouldn't modify any variable
function drawEverything(ctx) {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  maze.draw(ctx);
  player.draw(ctx);
  game.draw()
}

// updateEverything update variables
// It shouldn't draw on the canvas
function updateEverything() {
  frame++;
  player.update();
  maze.update();
  game.update()
}

function checkCollision() {
  if (player.x + player.width > maze.x) {
  console.log('hit')
    return true;
  }
  console.log('no hit')
  return false;
}


function startNewGame() {

}

/*
function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

// Return true when player and scoreBall are colliding
function checkCollision(player, scoreBall) {
  return distance(player, scoreBall) < player.radius + scoreBall.radius;
}

*/