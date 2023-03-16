/**
 * Express App
 */
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(require("./routes/users"));

module.exports = app;