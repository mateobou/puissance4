// const { Model, DataTypes } = require("sequelize");
import { Model, DataTypes } from "sequelize";

// module.exports = function (db) {
  export default function (db) {
  class GameInformations extends Model {}
  //Renommer en Case ? 
  GameInformations.init(
    {
      0: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue: 0
      },
      1: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue:0
      },
      2: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue:0
      },
      3: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:0
      },
      4: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue:0
      },
      5: {
        type: DataTypes.NUMBER,
        allowNull: false,
        defaultValue:0
      },
      6: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:0
      },
      7: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:0
      },
    },
    {
      sequelize: db,
    }
  );
  return GameInformations;
};
