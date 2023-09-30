import { Router } from 'express';

const router = new Router();

router.get('/', (req, res)=>{
    res.send("Voici la liste des routes disponibles : \n /login pour se connecter \n /signup pour s'inscrire \n /play pour initialiser une partie.")
})
router.route('/accueil')
    .get((req, res, next) => {
        res.write('Hello the extraordinary world!');
        console.log('etteettet')
        res.end()
    })
    .post((req, res, next) => {
        res.end()
    })

router.route('/accueil/joueurs/:id')
    .get((req, res, next) => {
        res.end()
    })
    .put((req, res, next) => {
        res.end()
    })
    .delete((req, res, next) => {
        res.end()
    })



export { router };