const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

let argv = yargs.argv;
let command = argv._[0]

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(`Printing: ${allNotes.length} note(s).`);
    if (allNotes) {
        allNotes.forEach(note => notes.logNote(note));
    } else {
        console.log('An error acure');
    }
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note does not exist');
    }
} else if (command === 'remove') {
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note has been removed' : 'Note does not exist';
    console.log(message);
} else {
    console.log('Command not recognized');
}
