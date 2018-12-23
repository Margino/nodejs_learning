const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

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

app.listen(3000, ()=> {
    console.log('Server is up on port 3000');
});
