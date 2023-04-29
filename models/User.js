// const { Model, DataTypes } = require("sequelize");
import { Model, DataTypes } from "sequelize";

// module.exports = function (db) {
  export default function (db) {
  class User extends Model {}

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
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

  return User;
};
