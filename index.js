import express from 'express';
import { createServer } from 'http';
import { router } from './routes/routes.js';

const app = express();


const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // use router to handle requests
    router(req, res, () => {});

    res.end('Hello World!');

});


server.listen(3001)