console.log('running app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');


console.log(_.isString('abc'));
console.log(_.isString(true));

const filteredArray = _.uniq(['Alex', 1, 4, 1, 8, 'Alex']);
console.log(filteredArray);


// const result = notes.add(9, -2);
// console.log(result);


// const res = notes.addNote();
// console.log(res);


// const userInfo = os.userInfo();
// fs.appendFileSync('greeting.txt', `Hello ${userInfo.username}! You are ${notes.age}.`);
