const { Model, DataTypes } = require("sequelize");

module.exports = function (db) {
  class Game extends Model {}
  //Renommer en Case ? 
  Game.init(
    {
      x: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        /* validate: {
          isEmail: true,
        },*/
      },
      y: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      sequelize: db,
    }
  );
  return Game;
};
