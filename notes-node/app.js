console.log('Starting app.js...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv
let command = process.argv[2];

console.log('Command: ', command);
console.log('Yargs: ', argv);

switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.body);
    break;
  case 'list':
    notes.getAll();
    break;
  case 'read':
    notes.getNote();
    break;
  case 'remove':
    notes.removeNote();
    break;
  default:
    console.log('Command not recognized.');
}