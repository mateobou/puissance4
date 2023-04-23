const db = require("../lib/db");
const User = require("./User")(db);

module.exports = {
  db,
  User,
};
db.sync({
  alter: true,
})
  .then(() => console.log("database updated"))
  .catch(() => console.log("database update failed"));