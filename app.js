/**
 * Express App
 */
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(("/v1/users", require("./routes/users")));
app.use(("/v1/game", require("./routes/game")));

module.exports = app;