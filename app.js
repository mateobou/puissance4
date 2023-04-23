export const app = express();

import express from 'express';
import { getAllRoutes } from './middlewares/hateoas.js';

// initialisé link personnalisé middleware
app.use(getAllRoutes);

app.get('/', (req, res) => {
    const message = 'Hello World!';
    res.json(message);
});

app.get('/example', (req, res) => {
    const message = 'Hello World!';
    res.json(message);
});



app.listen(3001)
console.log('Server started on port 3001');






