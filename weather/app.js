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
    url: `https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data.json?address=${encoddedAddress}`,
    json: true
}, (error, response, body) => {
    console.log('---');

    console.log(`EncodeURI: ${JSON.stringify(response.request.uri.query, undefined, 1)}`);
    
    console.log(`DecodeURI: ${decodeURIComponent(JSON.stringify(response.request.uri.query, undefined, 1))}\n`);

    console.log(`Adress: ${body.results[0].formatted_address}`);
    console.log(`Altitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);

    console.log('---');
});
