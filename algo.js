
import { COLS, PLAYER_ONE, ROWS, EMPTY } from "./enums/game.js";


// Je créer une matrice de grille vide pour pouvoir y placer les jetons
export function gridInit(){
  let grid = [];
  for (let i = 0; i < ROWS; i++) {
    grid[i] = [];
    for (let j = 0; j < COLS; j++) {
      grid[i][j] = EMPTY;
    }
  }
  return grid;
}

// Fonction pour insérer un jeton dans la colonne choisie

export function dropToken(column, player) {
    for (let i = ROWS - 1; i >= 0; i--) {
        if (grid[i][column] === EMPTY) {
            grid[i][column] = player;
            return true;
          }
    }
    return false;
  }


  // Fonction pour vérifier s'il y a un alignement de jetons
  export function checkWin(player) {

    // Vérifier les alignements horizontaux

    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS - 3; j++) {
        if (grid[i][j] === player && grid[i][j + 1] === player && grid[i][j + 2] === player && grid[i][j + 3] === player) {
          return true;
        }
      }
    }

    // Vérifier les alignements verticaux

  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === player && grid[i + 1][j] === player && grid[i + 2][j] === player && grid[i + 3][j] === player) {
        return true;
      }
    }
  }

  // Vérifier les alignements diagonaux (de haut en bas)
  
  for (let i = 0; i < ROWS - 3; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (grid[i][j] === player && grid[i + 1][j + 1] === player && grid[i + 2][j + 2] === player && grid[i + 3][j + 3] === player) {
        return true;
      }
    }
  }
  
  
  // Vérifier les alignements diagonaux (de bas en haut)
  for (let i = 3; i < ROWS; i++) {
    for (let j = 0; j < COLS - 3; j++) {
      if (grid[i][j] === player && grid[i - 1][j + 1] === player && grid[i - 2][j + 2] === player && grid[i - 3][j + 3] === player) {
        return true;
      }
    }
  }
  
  return false;
}

// Boucle de jeu principale
let currentPlayer = PLAYER_ONE;
let gameFinished = false;
while (!gameFinished)
  
  // Afficher la grille
  console.log(grid); 