export const app = express();
import dotenv from 'dotenv';
import express from 'express';
/* importer nos middlewares */
import { getAllRoutes } from './middlewares/hateoas.js';
import { i18n } from './middlewares/i18n.js';

// librairie pour gérer une clef unique pour chaque partie créer de jeu : https://github.com/uuidjs/uuid#readme
import { v4 as uuidv4 } from 'uuid';



// initialiser le jeu
const createGame = () => {
    return {
        gameUrl: uuidv4(),
        players: [],
        turn: 'X',
        winner: null,
        finished: false
    }
}

const game = createGame();

console.log(game)



// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;

// initialiser i18n
app.use(i18n);




// initialiser link personnalisé middleware
app.use(getAllRoutes);

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






