let frame = 0; // The frame counter
let player = new Player();
let maze = new Maze();
let game = new Game();
let creators = [];
for (let i = 0; i < NUMBER_OF_CREATORS; i++) {
  creators.push(new Creator());
}

console.log(creators);

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
  creators.forEach(e => e.draw(ctx));
  player.draw(ctx);
  game.draw(ctx);
}

// updateEverything update variables
// It shouldn't draw on the canvas
function updateEverything() {
  frame++;

  creators.forEach(e => e.update());
  maze.update();
  game.update();
  player.update();
  cleanUpCreators();
  fillUpCreators();
  //console.log(creators.length)
  // console.log(creators)
}

function checkCollision() {
  if (player.x + player.width > maze.x) {
    //console.log("hit");
    return true;
  }
  //console.log("no hit");
  return false;
}

function checkForCreatorOverlap() {
  creators.forEach(function(creator, index) {
    if (
      player.x >= creator.x &&
      player.x + player.width < creator.x + creator.width
    ) {
      return true;
    } else {
      return false;
    }
  });
}

function startNewGame() {
  console.log("newgameFunction");
  if (game.gameOver) {
    frame = 0; // The frame counter
    player = new Player();
    maze = new Maze();
    game = new Game();
    game.gameStarted = true;
    creators = [];
    for (let i = 0; i < NUMBER_OF_CREATORS; i++) {
      creators.push(new Creator());
    }
  } else {
    game.gameStarted = true;
  }
}

function cleanUpCreators() {
  creators.forEach((creator, index) => {
    if (creator.x > CANVAS_WIDTH + 10) {
      creators.splice(index, 1);
    }
  });
}

function fillUpCreators() {
  if (creators.length < NUMBER_OF_CREATORS) {
    for (let i = 0; i < NUMBER_OF_CREATORS - creators.length; i++) {
      creators.push(new Creator());
    }
  }
}

function creatorReachedEnd() {
  let result = false;
  creators.forEach(creator => {
    if (creator.x > 1200) {
      result = true;
    }
  });
  return result;
}
