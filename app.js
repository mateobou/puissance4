import express from 'express';

import dotenv from 'dotenv';

/* importer nos middlewares */
import { getAllRoutes } from './middlewares/hateoas.js';
import { i18n } from './middlewares/i18n.js';

export const app = express();
app.use(express.json());


// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;


sequelize.sync().then(() => {
    console.log("Base de donnée sequelize synchronisé et marche bien");
}).catch(err => {
    console.log("la BDD sequelize n'est pas relié, ca ne marche pas", err);
})



// initialiser i18n
app.use(i18n);
app.use(getAllRoutes);




/* importer les fonctionnailité avec le numéro de version */
import userRoute from "./routes/V0/user.js";
import sequelize from "./lib/db.js";

const apiV0Router = express.Router();


app.use('/api/V0/', userRoute)
app.use('/api/V0/', apiV0Router)








////////////////////a traiter
app.get('/api/V0/', (req, res) => {
    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */ 
    const messageTraduit = res.locals.t('Bienvenue');

    res.json({
        messageTraduit: messageTraduit,
        routes: req.routes,
        links: req.links
      });
});

app.get('/api/V0/exemple', (req, res) => {

    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */ 
    const messageTraduitOne = res.locals.t('Bienvenue');

    res.json(
        messageTraduitOne
    );
});










// démarrer serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
