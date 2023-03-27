export const app = express();

import express from 'express';


app.get('/', (req, res) => {

    const message = 'Hello World!';
    
    const links = [
       { href: '/', rel: 'self', method: 'GET', title: 'Home' },
    ]

    // envoyer aussi adresse editer toute en plus. 
    
    const response = {message, links};

    res.json(response);

});


app.listen(3001)
console.log('Server started on port 3001');






