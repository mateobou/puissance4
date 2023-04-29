import { Model, DataTypes } from "sequelize";


  export default function game (db) {
  class Game extends Model {}
  //Renommer en Case ? Ld : Moi j'aime bien Game
  Game.init({
      x: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      y: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        validate: {
          isIn: [['blue', 'red']],
        },
      },
    },
    {sequelize: db, modelName: "Game"}
  );
  return Game;
};