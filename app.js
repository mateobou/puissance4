export const app = express();
import dotenv from 'dotenv';
import express from 'express';
import { getAllRoutes } from './middlewares/hateoas.js';

// initialiser dotenv
dotenv.config();
const PORT = process.env.PORT || 3001;



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






