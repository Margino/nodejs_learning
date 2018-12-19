const request = require('request');

request({
    url: 'https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data.json',
    json: true
}, (error, response, body) => {
    console.log(body);
});
