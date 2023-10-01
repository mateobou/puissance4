import { Router } from 'express';
import { afficherSousRoutes } from '../utils.js';

const router = new Router();

router.route('/')
    .get((req, res, next) => {
        res.send(afficherSousRoutes('/api'));
    })

export default router