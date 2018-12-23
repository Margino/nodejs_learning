const request = require('request');

const geocodeAddress = (address, callback) => {

    const encoddedAddress = encodeURIComponent(address);

    request({
        url: `https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data${encoddedAddress}.json`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to the service.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find this address.')
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
