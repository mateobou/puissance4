/**
 * Express App
 */
import express from "express";
const app = express();
import game from './routes/game.js';
import partie from './routes/partie.js';

// middleware
app.use(("/game", game));
app.use(express.json());
app.use(("/partie", partie));

export default app;