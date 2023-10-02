import express from 'express';
import { app } from '../app.js';


const router = express.Router();
router.use(express.json());

router.get('/', (req, res, next) => {
    res.send("Voici la liste des routes disponibles : \n /login pour se connecter \n /signup pour s'inscrire \n /play pour initialiser une partie.")
})

export default router