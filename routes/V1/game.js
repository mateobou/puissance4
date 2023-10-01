/**
 * User routes
 */
import { Router } from 'express';
import { gridInit, dropToken, checkWin } from "../../algo.js";
import { PLAYER_ONE, PLAYER_TWO } from "../../enums/game.js";
import User from '../../models/User.js';

const router = Router();

const grid = []

router.get("/init", async (req, res) => {
  grid = gridInit()
  res.send(grid)
  res.status(201).json(user);
});

router.post("/play", async (req, res) => {
  const column = req.query.x;
  const player = req.query.player;
  if(req.session.playerNumber === PLAYER_ONE || req.session.playerNumber === PLAYER_TWO){
    const play = dropToken(column, player)
    const isGameFinished = checkWin(player)

    if(play){
      res.status(200)
      res.send("Superbe coup !")
    }
    if(isGameFinished){
      res.send("Vous avez gagné !")
    }
  res.send("La colonne est pleine, choisissez une autre colonne.")
  }
  else {
    res.send(`
          <form action="/choosePlayer" method="post">
              <label>
                  Choisissez votre numéro de joueur:
                  <select name="playerNumber">
                      <option value="1">Joueur 1</option>
                      <option value="2">Joueur 2</option>
                  </select>
              </label>
              <button type="submit">Valider</button>
          </form>
      `);
    
  }

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
export default router
