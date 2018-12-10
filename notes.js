console.log('running notes.js');

const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {
        title,
        body
    };

    try {
        notesString = fs.readFileSync('notes.json');
        notes = JSON.parse(notesString);
    } catch(e) {

    }

    // const duplicateNotes = notes.some((note) => note.title === title);
    // if (!duplicateNotes) {
    //     notes.push(note);
    //     fs.writeFileSync('notes.json', JSON.stringify(notes));
    // }

    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes.json', JSON.stringify(notes));
    }

};

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    console.log('Getting note:', title);
};

const removeNote = (title) => {
    console.log('Removeing note:', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};
