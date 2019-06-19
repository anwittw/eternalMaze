// Initialize the canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// Constants
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;


// MAZE Constants

const MAZE_VELOCITY = -3.0;


// Creator CONSTS

const NUMBER_OF_CREATORS = 3000;
const CREATOR_VELOCITY = 2.2;
const CREATOR_DECREASE_PER_SCORE = 300
const MIN_NUMBER_CREATORS = 2000


// Game Consts

const GAME_TIME = 30
const GAME_TIME_INCREASE = 6


// TIMER 

let timerInterval = 0;


// Player CONSTS

let flipped = false;

const PLAYER_VELOCITY = 5

