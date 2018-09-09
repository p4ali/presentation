#!/usr/bin/env node

var args = process.argv;
if(args.length<=2) {
  console.log("You have to pass a source .adoc filename")
  return -1;
}

var adoc = args[2];
console.log(adoc);


// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
//var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
var attributes = {'revealjsdir': 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.7.0'};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
asciidoctor.convertFile(adoc, options);
