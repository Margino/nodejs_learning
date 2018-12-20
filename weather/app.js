const request = require('request');

request({
    url: 'https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data.json',
    json: true
}, (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 1));
    console.log(`Adress: ${body.results[0].formatted_address}`);
    console.log(`Altitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
