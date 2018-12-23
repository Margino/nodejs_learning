const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home page',
        welcomeText: 'Welcome to the website!',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About',
        year: new Date().getFullYear()
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
