/**
 * User routes
 */
import { Router } from "express";
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



// module.exports = router;
export default router;