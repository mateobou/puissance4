/**
 * User routes
 */

import { Router } from "express";
import { Partie } from "../models/index.js";
import { v4 as uuidv4 } from "uuid";


const router = Router();

router.get("/partie", async (req, res) => {

  const urlPartie = uuidv4();
  const urlJoueurUn = urlPartie + "/joueurUn";
  const urlJoueurDeux = urlPartie + "/joueurDeux";

  const partie = await Partie.create({
    urlPartie: urlPartie,
    urlJoueurUn: urlJoueurUn, 
    urlJoueurDeux: urlJoueurDeux
  })

  res.status(201).json({parties : partie});
});

export default router;
