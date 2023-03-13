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
    }
    return false;
  }