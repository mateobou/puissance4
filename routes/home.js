import { Router } from 'express';
import { afficherSousRoutes } from '../utils';

const router = new Router();

router.route('/')
    .get((req, res, next) => {
        res.send(afficherSousRoutes('/api'));
    })