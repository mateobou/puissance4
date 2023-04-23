/**
 * User routes
 */
const { Router } = require("express");
const { User } = require("../models");
const {Game} = require("../models/");
const router = Router();    
router.get("/", async (req, res) => {
    //Récupérer les cases : 
    const game = await Game.findAll()
    res.status(201).json(game)
});
router.post("/Action/:numeroDeColonne", async (req, res) => {
  const numeroDeColonne = req.params.numeroDeColonne;
  if(numeroDeColonne > 7 || numeroDeColonne < 0){
    res.status(403).json("Veuillez choisir une colonne entre 0 et 7")
  }
  else{
    //Ajouter le pion
    
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

module.exports = router;