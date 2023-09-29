import express from 'express';

const router = express.Router();
router.use(express.json());




router.get('/api/V0/entrainement', (req, res) => {

    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */
    const messageTraduitOne = res.locals.t('Bienvenue');

    res.json(
        messageTraduitOne
    );
});


export default router;