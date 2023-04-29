/**
 * Express App
 */
import express from "express";
const app = express();
import game from './routes/game.js';
import users from './routes/users.js';

// middleware
app.use(("/game", game));
app.use(express.json());
app.use(("/users", users));

export default app;

/*
const express = require("express");
const app = express();
const game = require('./routes/game')
// middleware
app.use(("/game", game));
app.use(express.json());
app.use(("/users", require("./routes/users")));

module.exports = app;
*/