/**
 * User routes
 */
/* const { Router } = require("express");
const { User } = require("../models");
const {Game} = require("../models/"); */

import { Router } from "express";
import { User } from "../models/index.js";
import { Game } from "../models/index.js";


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
    const nexGameRow = await Game.create({x: "test", y: "test", color: "blue"});
    console.log(nexGameRow.toJSON())

    res.status(201).json(game)
});

/*


router.post("/Action/:numeroDeColonne", async (req, res) => {// Couleur du joueur => 1 / 2 routes
  const numeroDeColonne = req.params.numeroDeColonne;
  const numeroDeJoueur = req.query.joueur;
  if(numeroDeColonne > 7 || numeroDeColonne < 0){
    res.status(403).json("Veuillez choisir une colonne entre 0 et 7")
  }
  else{
    // Query => Couleur 
    GameInformations[numeroDeColonne] ++
    Game.create({
      x:GameInformations[numeroDeColonne],
      y:0, //gameInformations[numeroDeColonne]+1
      color:numeroDeJoueur
    })
  }
  //Doit créer 42 cases vides dans la table Game pour initialiser la partie
  
  res.status(201).json(user);
});


router.get("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

router.put("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (user) {
    await user.destroy();
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});


*/

// module.exports = router;
export default router;