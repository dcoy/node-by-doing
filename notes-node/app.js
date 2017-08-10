console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note to the database', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .help()
  .argv

  let command = argv._[0];

console.log('Command: ', command);
console.log('Yargs: ', argv);

switch (command) {
  case 'add':
    let note = notes.addNote(argv.title, argv.body);
    console.log(note ? `Note added!\nTitle: ${note.title}` : 'Something went wrong!');
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.getNote(argv.title);
    break;
  case 'remove':
    let noteRemoved = notes.removeNote(argv.title);
    console.log(noteRemoved ? `Note '${argv.title}' removed` : 'Something went wrong!');;
    break;
  default:
    console.log('Command not recognized.');
};