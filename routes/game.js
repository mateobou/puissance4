/**
 * User routes
 */
const { Router } = require("express");
const PaginationDTO = require("../dto/PaginationDTO");
const UsersDtos = require("../dto/UsersDto");
const { User } = require("../models");
const Game = require("../models/Game");

const router = Router();



router.post("/init", async (req, res) => {
    //Doit créer 42 cases vides dans la table Game pour initialiser la partie
    for(let x = 1; x<7;x++){
        const game = await Game.create(req.body);
    }
  const user = await User.create(req.body);
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
