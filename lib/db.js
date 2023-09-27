import Sequelize from "sequelize";

const sequelize = new Sequelize("postgres://root@localhost:5432/puissance4");

sequelize.authenticate().then(() => {
  console.log("Connection to PG has been established successfully.");
});

// module.exports = sequelize;
export default sequelize;