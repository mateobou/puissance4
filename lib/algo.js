import readlineSync from 'readline-sync';
import sequelize from './db';
import { Sequelize, DataTypes } from 'sequelize';

const ROWS = 6;
const COLS = 7;
const EMPTY = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

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

function checkWin(player) {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (
        grid[i][j] === player &&
        grid[i][j + 1] === player &&
        grid[i][j + 2] === player &&
        grid[i][j + 3] === player
      ) {
        return true;
      }
    }
  }

  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS; j++) {
      if (
        grid[i][j] === player &&
        grid[i + 1][j] === player &&
        grid[i + 2][j] === player &&
        grid[i + 3][j] === player
      ) {
        return true;
      }
    }
  }

  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (
        grid[i][j] === player &&
        grid[i + 1][j + 1] === player &&
        grid[i + 2][j + 2] === player &&
        grid[i + 3][j + 3] === player
      ) {
        return true;
      }
    }
  }

  for (let i = 3; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (
        grid[i][j] === player &&
        grid[i - 1][j + 1] === player &&
        grid[i - 2][j + 2] === player &&
        grid[i - 3][j + 3] === player
      ) {
        return true;
      }
    }
  }

  return false;
}

const GameResult = sequelize.define('GameResult', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  winner: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync({ force: true }).then(() => {
  console.log('La table game_results a été créée.');
});

function saveResult(winner) {
  GameResult.create({ winner: winner }).then((gameResult) => {
    console.log(`Le résultat du jeu a été ajouté avec succès avec l'id ${gameResult.id}`);
  });
}

let currentPlayer = PLAYER_ONE;
let gameFinished = false;
while (!gameFinished) {
  console.log(grid);

  let column = readlineSync.question(
    `Joueur ${currentPlayer}, entrez le numéro de colonne (0 à 6) pour déposer votre jeton : `
  );

  if (dropToken(column, currentPlayer)) {
    if (checkWin(currentPlayer)) {
      console.log(`Le joueur ${currentPlayer} a gagné !`);
      saveResult(currentPlayer);
      gameFinished = true;
    } else {
      currentPlayer = currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
    }
  } else {
    console.log("La colonne est pleine, veuillez en choisir une autre.");
  }
}

