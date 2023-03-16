// Je définit les variables de grille pour le puissance 4

const ROWS = 6;
const COLS = 7;
const EMPTY = 0;
const PLAYER_ONE = 1;
const PLAYER_TWO = 2;

// Je créer une matrice de grille vide pour pouvoir y placer les jetons
let grid = [];
for (let i = 0; i < ROWS; i++) {
  grid[i] = [];
  for (let j = 0; j < COLS; j++) {
    grid[i][j] = EMPTY;
  }
}


// Fonction pour insérer un jeton dans la colonne choisie

function dropToken(column, player) {
    for (let i = ROWS - 1; i >= 0; i--) {
        if (grid[i][column] === EMPTY) {
            grid[i][column] = player;
            return true;
          }
    }
    return false;
  }


  // Fonction pour vérifier s'il y a un alignement de jetons
  function checkWin(player) {

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
  }

  // Afficher la grille
  console.log(grid);