const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello express');
});

app.get('/about', (req, res) => {
    res.send({
        name: 'Alex',
        like: [
            'fruit',
            'cats',
            'fish'
        ]
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request!'
    })
});

app.listen(3000);
