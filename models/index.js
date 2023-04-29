import db from "../lib/db.js";
import createPartieModel from "./Partie.js";
import createGameModel from "./Game.js";
import createGameInformationsModel from "./GameInformations.js";

const Partie = createPartieModel(db);
const Game = createGameModel(db);
const GameInformations = createGameInformationsModel(db);


export { db, Partie, Game, GameInformations };



db.sync({
  alter: true,
})
  .then(() => console.log("database updated"))
  .catch(() => console.log("database update failed"));