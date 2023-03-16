/*
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use(("/v1/users", require("./routes/V1/users")));
app.use(("/v1/game", require("./routes/V1/game")));
*/

export const app = express();

import express from 'express';
import { createServer } from 'http';
import { router } from './routes/V1/routes.js';


const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // use router to handle requests
    router(req, res, () => {});


    res.end('Hello World!')

});

server.listen(3001)
console.log('Server started on port 3001');






