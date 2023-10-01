import express from 'express';

export const isPlayerConnected = ()=>{
    if(req.session.playerNumber === PLAYER_ONE || req.session.playerNumber === PLAYER_TWO){
        return true
    }
    return false
}

export function logRoutes() {
    const router = express.Router();
    router.use(express.json());
    console.log("Voici les routes disponibles :")
    console.log(router.stack)
    router.stack.forEach(function(r){
        if (r.route && r.route.path){
          console.log(r.route.path)
        }
      })
}
