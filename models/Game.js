import { Model, DataTypes, UUIDV4 } from "sequelize";


  export default function game (db) {
  class Game extends Model {}
  //Renommer en Case ? Ld : Moi j'aime bien Game
  Game.init({
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        unique :true 
      },
      x: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:false
      },
      y: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique:false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
        validate: {
          isIn: [['blue', 'red',"empty"]],
        },
      },
    },
    {sequelize: db, modelName: "Game"}
  );
  return Game;
};