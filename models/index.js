const db = require("../lib/db");
const User = require("./User")(db);
const Game = require("./Game")(db);

module.exports = {
  db,
  User,
  Game
};
db.sync({
  alter: true,
})
  .then(() => console.log("database updated"))
  .catch(() => console.log("database update failed"));