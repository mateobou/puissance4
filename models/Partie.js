import { Model, DataTypes } from "sequelize";


  export default function Partie (db) {
  class Partie extends Model {}

  Partie.init({
      urlPartie: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
      },
      urlJoueurUn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      urlJoueurDeux: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {sequelize: db, modelName: "Partie"}
  );
  return Partie;
};
