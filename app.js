import express from 'express';

import dotenv from 'dotenv';

/* importer nos middlewares */
import { getAllRoutes } from './middlewares/hateoas.js';
import { i18n } from './middlewares/i18n.js';

// test connexion BDD avec users
import sequelize from "./lib/db.js";
import User from "./models/User.js";
import {where} from "sequelize";

dotenv.config();
export const app = express();
app.use(express.json());


// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;

// initialiser i18n
app.use(i18n);







sequelize.sync().then(() => {
    console.log("Base de donnée sequelize synchronisé et marche bien");
}).catch(err => {
    console.log("la BDD sequelize n'est pas relié, ca ne marche pas", err);
})

// voir les utilisateurs
const MettreUtilisateursDansBDD = async () => {
    try {

        await User.destroy({
            where: {},
            force: true,
        });

        // réinitialiser aussi les id
        await sequelize.query('ALTER SEQUENCE "Users_id_seq" RESTART WITH 1');


        // créer deux faux utilisateurs pour avoir qqch quand on lance notre serveurs
        const utilisateurs = [{
            firstName: "Lima",
            lastName: "Root",
            email: "exemple@test.com",
            password: "root",
        }, {
            firstName: "Loumo",
            lastName: "Hernebes",
            email: "exemple2@test.com",
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


// inscription utilisateur
app.post("/inscription", async (req, res) => {
    try {

        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;


        await User.create({
            firstName,
            lastName,
            email,
            password
        })

        console.log("inscription réalisée avec succès")

        res.status(200).json({message : 'ca marche'});

    } catch (err) {
        console.error("erreur lors de l'inscription" + err)
        res.status(400).json({message : 'ca ne marche pas'});
    }
} )


// connexion utilisateur
app.post('/connexion', async (req, res) => {
    try {
        const firstName = req.body.firstName;
        const password = req.body.password;

        const login = await User.findOne({where: { firstName }});

        if (login && password == login.password) {
            console.log("réalisée avec succès")

            res.status(200).json({message : 'ca marche'});
        } else {
            console.log("Mot de passe incorrect");
            res.status(401).json({ message: 'Mot de passe incorrect' });
        }

    } catch {
        console.error(" lors de l'inscription" + err)
        res.status(400).json({message : 'ca ne marche pas'});
    }
})





// initialiser link personnalisé middleware
app.use(getAllRoutes);


app.get('/utilisateurs', async (req, res) => {
    MettreUtilisateursDansBDD();


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






