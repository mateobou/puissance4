/**
 * User routes
 */
import { Router } from "express";
import { Game } from "../models/index.js";
import checkWin from "../lib/algo.js";


const GameInformations = {
  1:0,
  2:0,
  3:0,
  4:0,
  5:0,
  6:0,
  7:0,
}

const router = Router();    
router.get("/game", async (req, res) => {
    //Récupérer les cases : 
    const game = await Game.findAll()

    // Créer raw pour tester si ca marche
    /* const nexGameRow = await Game.create({x: "23", y: "33", color: "red"});
    console.log(nexGameRow.toJSON()) */

    res.status(201).json(game)
});











router.post("/Action/:numeroDeColonne", async (req, res) => {// Couleur du joueur => 1 / 2 routes
  const numeroDeColonne = req.params.numeroDeColonne;
  const numeroDeJoueur = req.query.joueur;
  if(numeroDeColonne > 7 || numeroDeColonne < 0){
    res.status(403).json("Veuillez choisir une colonne entre 0 et 7")
  }
  else{
    GameInformations[numeroDeColonne] ++
    Game.create({
      x:GameInformations[numeroDeColonne],
      y:gameInformations[numeroDeColonne]+1,
      color:numeroDeJoueur
    })
    gameInformations[numeroDeColonne]
  }
  checkWin('joueur 1') ? res.status(201).json("Vous avez gagné") : res.status(201).json("Quel coup de maître !");
  
});


// module.exports = router;
export default router;