// const yargs = require('yargs');
// const geocode = require('./geocode/geocode.js');
//
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             descrive: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         condole.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });

const request = require('request');

const weater = request({
    url: 'https://api.darksky.net/forecast/0cddcade1c74aef9741f9c9204baf19b/37.4261631,-122.07608',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(JSON.stringify(`Temperature: ${body.currently.temperature}`));
    } else {
        console.log('Unable to connect to the forecast service.');
    }
});
