const express = require('express');
const fs = require('fs');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partial');
app.set('view engin', 'hbs');

app.use((req, res, next) => {
    const now = new Date().toString();
    const log = `${now}: ${req.method} ${req.url}`;
    fs.appendFileSync('server.log', `${log}\n`);
    console.log(log);
    next();
});

app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        title: 'Home page',
        welcomeText: 'Welcome to the website!'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        title: 'About'
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
