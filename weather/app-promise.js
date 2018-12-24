const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address for ftech weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encoddedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://raw.githubusercontent.com/Margino/nodejs_learning/weather/weather/playground/data${encoddedAddress}.json`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find this address.');
    }
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/0cddcade1c74aef9741f9c9204baf19b/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl)
}).then((response)=>{
    const temperature = response.data.currently.temperature;
    const apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`The temperature is ${temperature}. It fills like ${apparentTemperature}`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API services.')
    } else {
        console.log(e.message);
    }
});
