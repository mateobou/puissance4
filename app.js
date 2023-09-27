export const app = express();
import dotenv from 'dotenv';
import express from 'express';
import Sequelize from "sequelize";
import {configDotenv} from "dotenv";

/*
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
 */

dotenv.config();


if (config.use_env_variable) {
    let sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    let sequelize = new Sequelize(config.database, config.username, config.password, config);
}

/* importer nos middlewares */
import { getAllRoutes } from './middlewares/hateoas.js';
import { i18n } from './middlewares/i18n.js';

// test connexion BDD avec users
import sequelize from "./lib/db.js";
import User from "./models/User.js";

sequelize.sync().then(() => {
    console.log("Base de donnée sequelize synchronisé et marche bien");
}).catch(err => {
    console.log("la BDD sequelize n'est pas relié, ca ne marche pas", err);
})


const MettreUtilisateursDansBDD = async () => {
    try {
        const utilisateurs = [{
            firstName: "Lima",
            lastName: "Root",
            email: "exemple@test.com",
            password: "root",
        }, {
            firstName: "Loumo",
            lastName: "Hernebes",
            email: "exemple@test.com",
            password: "root",
        }];

        for (const p of utilisateurs) {
            await User.create({
                firstName: p.firstName,
                lastName: p.lastName,
                email: p.email,
                password: p.password,
            });
        }

        console.log("utilisateurs factices  mis dans la BDD");

    } catch (err) {
        console.error("message d'erreur" + err)
    }
}

MettreUtilisateursDansBDD();





// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;

// initialiser i18n
app.use(i18n);




// initialiser link personnalisé middleware
app.use(getAllRoutes);


app.get('/utilisateurs', async (req, res) => {
    try {
        const AllUtilisateurs = await User.findAll();
        res.json(AllUtilisateurs);
    } catch (err) {
        console.error("message d'erreur route get" + err)
    }

})



app.get('/', (req, res) => {
    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */ 
    const messageTraduit = res.locals.t('Bienvenue');

    res.json({
        messageTraduit: messageTraduit,
        routes: req.routes,
        links: req.links
      });
});

app.get('/exemple', (req, res) => {

    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */ 
    const messageTraduitOne = res.locals.t('Bienvenue');

    res.json(
        messageTraduitOne
    );
});



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});






