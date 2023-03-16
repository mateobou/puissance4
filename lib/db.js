const Sequelize = require("sequelize");

const sequelize = new Sequelize("postgres://user:pass@example.com:5432/puissance4");

sequelize.authenticate().then(() => {
  console.log("Connection to PG has been established successfully.");
});

module.exports = sequelize;