/**
 * User routes
 */
import { v4 as uuidv4 } from 'uuid';
import { Router } from "express";
import { Game } from "../models/index.js";
import { UUID, UUIDV4 } from "sequelize";
import checkWin from "../lib/algo.js";

let Joueur = 1
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

router.post('/init', async (req,res)=>{
  for(let i = 0;i<8;i++){
    for (let j =0; j<7; j++)
    {
      try {
        await Game.create({
          id: 3,
          x: 4,
          y: 5,
          color: 'blue'
        }, { ignoreDuplicates: true });
        res.send("success")
      } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          console.log('Entrée en double ignorée.');
        } else {
          console.log('Une erreur est survenue : ', error);
        }
      }
    }
  }
})
router.delete('/supprimer', async (req, res) => {
  try {
    await Game.destroy({
      where: {},
      truncate: true
    });
    res.status(200).json('Toutes les données ont été supprimées');
  } catch (error) {
    console.error(error);
    res.status(500).json('Erreur lors de la suppression des données');
  }
});

router.put("/Action/:numeroDeColonne", async (req, res) => {
  const numeroDeColonne = req.params.numeroDeColonne;
  if (numeroDeColonne > 7 || numeroDeColonne < 0) {
    res.status(403).json("Veuillez choisir une colonne entre 0 et 7")
  } else {
    Game.findOne({ where: { x: numeroDeColonne }, order: [["y", "DESC"]] })
    .then(gameInstance => {
    if (!gameInstance) {
    res.status(404).json("Aucune case disponible dans cette colonne")
    } else {
    GameInformations[numeroDeColonne]++
    const updatedColor = Joueur == 1 ? "red" : "blue"
    gameInstance.update({ color: updatedColor, y: GameInformations[numeroDeColonne] })
    .then(() => {
    Joueur = Joueur == 1 ? 2 : 1
    res.send("Superbe coup ! Au tour du joueur " + Joueur + " de joueur désormais")
    })
    .catch(error => {
    console.log(error)
    res.status(500).json("Une erreur est survenue lors de la mise à jour de la case")
    })
    }
    })
  .catch(error => {
  console.log(error)
  res.status(500).json("Une erreur est survenue lors de la recherche de la case")
  })
}
  checkWin('blue') ? res.status(201).json("Vous avez gagné") : res.status(201).json("Quel coup de maître !");
  });
  
  

// module.exports = router;
export default router;