console.log('app running.');

const fs = require('fs');
const os = require('os');

const userInfo = os.userInfo();

fs.appendFileSync('greeting.txt', `Hello ${userInfo.username}!`);
