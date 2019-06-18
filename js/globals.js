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


// Game Consts

const GAME_TIME = 30
const GAME_TIME_INCREASE = 10


// TIMER 

let timerInterval = 0;
