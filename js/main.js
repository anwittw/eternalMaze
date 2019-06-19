
let frame = 0; // The frame counter
let player = new Player();
let maze = new Maze();
let game = new Game();
let creators = [];
let numberOfCreators = calculateAmmountCreators();
for (let i = 0; i < numberOfCreators; i++) {
  creators.push(new Creator());
}

gameInterval();

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
  game.draw(ctx);
  player.draw(ctx);
}

// updateEverything update variables
// It shouldn't draw on the canvas
function updateEverything() {
  frame++;

  creators.forEach(e => e.update());
  maze.update();
  game.update();
  player.update();
  updateLastScore();
}

function startNewGame() {
  console.log("newgameFunction");
  if (game.gameOver) {
    //console.log("hanse");
    if(flipped) {
    flipAll()
    }
    frame = 0; // The frame counter
    player = new Player();
    maze = new Maze();
    game = new Game();
    updateScoreBoard();
    game.gameStarted = true;
    gameInterval();
    numberOfCreators = calculateAmmountCreators();
    creators = [];
    for (let i = 0; i < numberOfCreators; i++) {
      creators.push(new Creator());
    }
  } else if (!game.gameStarted) {
    game.gameStarted = true;
  } else if (game.gameStarted && !game.gameOver && game.playerWon) {
    //console.log("Next Round");
    updateScoreBoard();
    if(game.score >= 3) {
      flipAll()
    }
    numberOfCreators = calculateAmmountCreators();
    frame = 0;
    player = new Player();
    maze = new Maze();
    game.playerWon = false;
    game.timer = game.timer + GAME_TIME_INCREASE;
    creators = [];
    for (let i = 0; i < numberOfCreators; i++) {
      creators.push(new Creator());
    }
  }
}

function creatorReachedEnd() {
  let result = false;
  creators.forEach(creator => {
    if (creator.x > 1200) {
      game.pathInPlace = true;
      result = true;
    }
  });
  return result;
}

function indexOfFirstCreator() {
  let lastIndex = 0;
  let smallestX = 1300;
  for (let i = 0; i < creators.length; i++) {
    if (
      creators[i].x < smallestX &&
      creators[i].x - 2 * creators[i].width > 0 &&
      creators[i].y + 2 * creators[i].height > 0 &&
      creators[i].y + 2 * creators[i].height < 600
    ) {
      lastIndex = i;
      smallestX = creators[i].x;
    }
  }
  return lastIndex;
}

function indexOfLastCreator() {
  let lastIndex = 0;
  let biggestX = 0;
  for (let i = 0; i < creators.length; i++) {
    if (
      creators[i].x > biggestX &&
      creators[i].x + creators[i].width < 1200 &&
      creators[i].y > 0 + creators[i].height &&
      creators[i].y + creators[i].height < 600
    ) {
      lastIndex = i;
      biggestX = creators[i].x;
    }
  }
  return lastIndex;
}

function updateScoreBoard() {
  if (game.gameStarted) {
    game.score++;
  }
  let str = "000" + String(game.score);
  let toAppend = "SCORE: " + str.substring(str.length - 4, str.length);
  $scoreBoard.innerText = toAppend;
}

function updateLastScore() {
  let storedScore = "000" + getItem("score");
  let storedName = getItem("playerName");
  if (storedName) {
    let toAppend2 =
      "LAST SCORE: " +
      storedName +
      ", " +
      storedScore.substring(storedScore.length - 4, storedScore.length);
    $lastScore.innerText = toAppend2;
  }
}

function gameInterval() {
  timerInterval = setInterval(() => {
    if (game.mazeInPlace) {
      game.timer--;
    }
  }, 1000);
}

function calculateAmmountCreators() {
  let calculated = NUMBER_OF_CREATORS - CREATOR_DECREASE_PER_SCORE * game.score;
  if (calculated > MIN_NUMBER_CREATORS) {
    return calculated;
  } else {
    return MIN_NUMBER_CREATORS;
  }
}

function flipAll() {
  if (
    getComputedStyle(document.documentElement).getPropertyValue(
      "--prim-clr"
    ) === "white"
  ) {
    $root.style.setProperty("--prim-clr", "black");
    $root.style.setProperty("--sec-colr", "white");
    flipped = true;
  } else {
    $root.style.setProperty("--prim-clr", "white");
    $root.style.setProperty("--sec-colr", "black");
    flipped = false;
  }
}
