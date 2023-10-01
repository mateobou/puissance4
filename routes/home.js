import express from 'express';
import { app } from '../app.js';


const router = express.Router();
router.use(express.json());

router.get('/', (req, res, next) => {
    console.log(router.stack)
    router.stack.forEach(function(r){
        if (r.route && r.route.path){
          console.log(r.route.path)
        }
      })
})

export default router