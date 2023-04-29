/**
 * Express App
 */
const express = require("express");
const app = express();
const game = require('./routes/game')
// middleware
app.use(("/game", game));
app.use(express.json());
app.use(("/users", require("./routes/users")));

module.exports = app;