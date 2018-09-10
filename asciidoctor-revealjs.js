#!/usr/bin/env node

var args = process.argv;
if(args.length<=2) {
  console.log("You have to pass a source .adoc filename")
  return -1;
}

var adoc = args[2];
console.log('name='+adoc);
console.log('cwd='+process.cwd())
console.log('cmd='+__dirname)

function findPrefix() {
  var cur=process.cwd().split("/")
  var cmd=__dirname.split("/")
  var i, prefix=""
  for (i=cmd; i<cur; i++) {
    prefix += "../"
  }

  console.log("prefix="+prefix)
  return prefix;
}

// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js');

// Convert the document 'presentation.adoc' using the reveal.js converter
// var attributes = {'revealjsdir': 'node_modules/reveal.js@'};
var attributes = {'revealjsdir': findPrefix()+'node_modules/reveal.js@'};
//var attributes = {'revealjsdir': 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.7.0'};
var options = {safe: 'safe', backend: 'revealjs', attributes: attributes};
asciidoctor.convertFile(adoc, options);
