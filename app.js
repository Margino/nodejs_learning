console.log('running app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

const result = notes.add(9, -2);
console.log(result);

// const res = notes.addNote();
// console.log(res);

// const userInfo = os.userInfo();
// fs.appendFileSync('greeting.txt', `Hello ${userInfo.username}! You are ${notes.age}.`);
