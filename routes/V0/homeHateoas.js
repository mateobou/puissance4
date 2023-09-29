import express from 'express';


const router = express.Router();
router.use(express.json());



router.get('/api/V0/', (req, res) => {
    /* utiliser le middleware traduction key valeur du bon fichier json de langue de la route */
    const messageTraduit = res.locals.t('Bienvenue');

    res.json({
        messageTraduit: messageTraduit,
        routes: req.routes,
        links: req.links
    });
});

export default router;