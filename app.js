import express from 'express';
import sequelize from "./lib/db.js";
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
app.use(express.urlencoded({ extended: true }));




/* importer les fonctionnailité avec le numéro de version */
import userRoute from "./routes/V0/user.js";
import gameRoutes from "./routes/V1/game.js";
import homeHateoas from "./routes/V0/homeHateoas.js";
import entrainement from "./routes/V0/entrainement.js"


const apiV0Router = express.Router();
app.use('/api', )

app.use('/api/V0/', userRoute)
app.use(homeHateoas);
app.use(entrainement)
app.use('/api/V0/', apiV0Router)
app.use('api/v1/',gameRoutes)





// démarrer serveur
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});