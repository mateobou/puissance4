import { Router } from 'express';

const router = new Router();


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