#!/usr/bin/env node

if (process.argv.length < 3) {
  console.error("Usage: " + process.argv[1] + " <example>")
  process.exit(-1)
}

var codexjs = require('./index')

// parse input
var i = process.argv[2]
var j = process.argv[3]

codexjs.incrementOverNewLine(i, j, function(err, i, j) {
  if (err != null) {
    process.exit(-1)
  }

  console.log(i, j);
  // process.stdout.write(i, j)
})
