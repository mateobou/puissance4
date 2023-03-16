const { Model, DataTypes } = require("sequelize");

module.exports = function (db) {
  class Game extends Model {}

  Game.init(
    {
      x: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
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
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize: db,
    }
  );

  return Game;
};
