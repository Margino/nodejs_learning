// const obj = {
//     name: 'Alex'
// };
// console.log('Obj:', obj, typeof obj);

// const stringObj = JSON.stringify(obj);
// console.log('StirngObj:', stringObj, typeof stringObj);

// const person = '{"name":"Alex","age":25}';
// console.log('Person:', person, typeof person);


const fs = require('fs');

const originNote = {
    title: 'Some title',
    body: 'Some body'
};
const originNoteString = JSON.stringify(originNote);
fs.writeFileSync('note.json', originNoteString);

const noteString = fs.readFileSync('note.json');
const note = JSON.parse(noteString);
console.log('Note:', note, typeof noteString);
