const request = require('request');

const getWeather = (lat, lng, callback) => {
    const weater = request({
        url: `https://api.darksky.net/forecast/0cddcade1c74aef9741f9c9204baf19b/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apprentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to connect to the forecast service.');
        }
    });
};

module.exports.getWeather = getWeather;
