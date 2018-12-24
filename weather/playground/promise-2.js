const request = require('request');

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {

        const encoddedAddress = encodeURIComponent(address);

        request({
            url: `https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data${encoddedAddress}.json`,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to the service.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find this address.');
            } else if (body.status === 'OK') {
                resolve(
                    {
                        address: body.results[0].formatted_address,
                        latitude: body.results[0].geometry.location.lat,
                        longitude: body.results[0].geometry.location.lng
                    }
                );
            }
        });

    });
};

geocodeAddress('1111').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((error) => {
    console.log(error);
});
