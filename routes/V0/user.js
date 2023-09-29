import express from 'express';
import User from "../../models/User.js";
import { Op } from "sequelize";
// op pour comparaison sequelize
import sequelize from "../../lib/db.js";
import { where } from "sequelize";



const router = express.Router();
router.use(express.json());


const ObtenirAlluser = async () => {
    try {
        const utilisateurs = await User.findAll();
        return utilisateurs;
    } catch (err) {
        console.log("message erreur ObtenirAlluser " + err);
    }
}


// voir les utilisateurs
const MettreUtilisateursDansBDD = async () => {
    try {

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

        const LimaExiste = await User.findOne({ where: { firstName: "Lima" } });
        const LoumoExiste = await User.findOne({ where: { firstName: "Loumo" } });

        if(!LimaExiste && !LoumoExiste) {
            for (const p of utilisateurs) {
                await User.create({
                    firstName: p.firstName,
                    lastName: p.lastName,
                    email: p.email,
                    password: p.password,
                });
            }
        }


        console.log("utilisateurs factices  mis dans la BDD");

    } catch (err) {
        console.error("message d'erreur" + err)
    }
}


router.get('/utilisateurs', async (req, res) => {
    MettreUtilisateursDansBDD();


    try {
        //const AllUtilisateurs = await User.findAll();
        const obtient = await ObtenirAlluser();
        res.status(200).json({message: "marche bien", user: obtient});
    } catch (err) {
        console.error("message d'erreur route get" + err)
    }

})



// inscription utilisateur
router.post("/inscription", async (req, res) => {
    try {

        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;


        const nouveau = await User.create({
            firstName,
            lastName,
            email,
            password
        })

        if (nouveau) {
            console.log("inscription réalisée avec succès")
            await MettreUtilisateursDansBDD();
            const obtient = await ObtenirAlluser();
            res.status(200).json({message : 'ca marche', user: obtient});
        } else {
            console.log('utilisateur pas mit dans la BDD');
            res.status(400).json({message: "Ca ne marche pas, utilisateur pas injecté"})
        }





    } catch (err) {
        console.error("erreur lors de l'inscription" + err)
        res.status(400).json({message : 'ca ne marche pas'});
    }
} )


// connexion utilisateur
router.post('/connexion', async (req, res) => {
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


export default router;