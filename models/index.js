const db = require("../lib/db");
const User = require("./User")(db);
const Game = require("./Game")(db);
const GameInformations = require("./GameInformations")(db);

module.exports = {
  db,
  User,
  Game,
  GameInformations
};
db.sync({
  alter: true,
})
  .then(() => console.log("database updated"))
  .catch(() => console.log("database update failed"));