#!/usr/bin/env node

var note = process.argv[2]

var newNote = {
  content: note,
  id: Date.now()
}

console.log(newNote);
