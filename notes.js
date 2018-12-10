console.log('running notes.js');

const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes.json');

        return JSON.parse(notesString);
    } catch(e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    const notes = fetchNotes();
    const note = {
        title,
        body
    };
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);

        return note;
    }
};

const getAll = () => {
    console.log('Getting all notes');
}

const getNote = (title) => {
    const notes = fetchNotes();
    filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
};

const removeNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

const logNote = (note) => {
    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
