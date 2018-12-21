const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            descrive: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encoddedAddress = encodeURIComponent(argv.address);

request({
    url: `https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data${encoddedAddress}.json`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to the service.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find this address.');
    } else if (body.status === 'OK') {
        console.log(`Adress: ${body.results[0].formatted_address}`);
        console.log(`Altitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
