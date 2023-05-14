import { Game } from "../models/index.js";
const ROWS = 6;
const COLS = 7;
const EMPTY = 0;

let grid = [];
for (let i = 0; i < ROWS; i++) {
  grid[i] = [];
  for (let j = 0; j < COLS; j++) {
    grid[i][j] = EMPTY;
  }
}

function dropToken(column, player) {
  for (let i = ROWS - 1; i >= 0; i--) {
    if (grid[i][column] === EMPTY) {
      grid[i][column] = player;
      return true;
    }
  }
  return false;
}

export default function checkWin(player) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      let GameCase = Game.findAll({where: {x:i,y:j}})
      if (
        GameCase.color === player &&
        Game.findAll({where: {x:i,y:j+1}})=== player &&
        Game.findAll({where: {x:i,y:j+2}}) === player &&
        Game.findAll({where: {x:i,y:j+3}}) === player
      ) {
        return true;
      }
    }
  }
  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS; j++) {
      if (
        Game.findAll({where: {x:i,y:j+1}}) === player &&
        Game.findAll({where: {x:i+1,y:j+1}}) === player &&
        Game.findAll({where: {x:i+2,y:j+1}}) === player &&
        Game.findAll({where: {x:i+3,y:j+1}}) === player
      ) {
        return true;
      }
    }
  }

  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (
        Game.findAll({where: {x:i+1,y:j+1}})&&
        Game.findAll({where: {x:i+2,y:j+2}}) === player &&
        Game.findAll({where: {x:i+3,y:j+3}}) === player
      ) {
        return true;
      }
    }
  }

  for (let i = 3; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (
        Game.findAll({where: {x:i,y:j}}) === player &&
        Game.findAll({where: {x:i-1,y:j+1+1}}) === player &&
        Game.findAll({where: {x:i-2,y:j+2}}) === player &&
        Game.findAll({where: {x:i-3,y:j+3}})
      ) {
        return true;
      }
    }
  }

  return false;
}

