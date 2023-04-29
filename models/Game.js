// const { Model, DataTypes } = require("sequelize");
import { Model, DataTypes } from "sequelize";


// module.exports = function (db) {
  function game (db) {
  class Game extends Model {}
  //Renommer en Case ? Ld : Moi j'aime bien Game
  Game.init(
    {
      x: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: true,
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

export default game;