import sequelize from "../lib/db.js";
import { Model, DataTypes } from "sequelize";

// module.exports = function (db) {

class User extends Model{}
  //class User extends Model {}
    User.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                firstname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                lastname: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
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

            },
        {
            sequelize,
            modelName: 'User',
        }
    );

export default User;