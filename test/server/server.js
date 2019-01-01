const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200)
       .send([
            {
                name: 'John',
                age: 22
            },
            {
                name: 'Mike',
                age: 30
            }
        ]);
});

app.listen(3000, () => {
    console.log('Server is up on port localhost:3000');
});

module.exports.app = app;
