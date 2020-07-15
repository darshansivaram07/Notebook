const notes = require('./notes.js')
const yargs = require('yargs')


yargs.version('1.1.0')
yargs.command({
  command: 'add',
  describe: 'Add a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title,argv.body)
  }
}).parse()
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder:{
    title:{
      describe: 'Title of the note to be removed',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title)
  }
}).parse()
yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler() {
    notes.listNotes()
  }
}).parse()
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Title of the note to be retrieved',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.getNotes(argv.title)
  }
}).parse()