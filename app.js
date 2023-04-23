export const app = express();
import dotenv from 'dotenv';
import express from 'express';
import { getAllRoutes } from './middlewares/hateoas.js';
import { i18next } from './middlewares/i18n.js';

// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;

// initialiser i18n
app.use(i18next);



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



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});






