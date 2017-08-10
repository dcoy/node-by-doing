const fs = require('fs');

console.log('Starting notes.js...');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  };
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

let getAll = () => {
  let notes = fetchNotes();
  console.log(JSON.stringify(notes));
};

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNote = notes.filter((note) => note.title === title);
  try {
    console.log(`Getting note:
    Title: ${JSON.stringify(filteredNote[0].title)}
    Body: ${JSON.stringify(filteredNote[0].body)}`);
  } catch (err) {
    console.log(`Note '${title}' doesn't exist!`)
  };
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  
  return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};