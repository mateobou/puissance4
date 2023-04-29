/* 
const db = require("../lib/db");
const User = require("./User")(db);
const Game = require("./Game")(db);
const GameInformations = require("./GameInformations")(db);
*/

import db from "../lib/db.js";
import createUserModel from "./User.js";
import createGameModel from "./Game.js";
import createGameInformationsModel from "./GameInformations.js";

const User = createUserModel(db);
const Game = createGameModel(db);
const GameInformations = createGameInformationsModel(db);


/*
module.exports = {
  db,
  User,
  Game,
  GameInformations
};
*/
export { db, User, Game, GameInformations };



db.sync({
  alter: true,
})
  .then(() => console.log("database updated"))
  .catch(() => console.log("database update failed"));