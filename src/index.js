#!/usr/bin/env node
import unescapeJs from "unescape-js";

const helpText = `
Outputs the passed text to the command line. Supports escape sequences (\\n, \\t and others).

Usage
  $ echo-cli <input>

Examples
  $ echo-cli Hello, world!
  Hello, world!

  $ echo-cli 'Hello,\\nworld!'
  Hello,
  world!

  $ echo-cli '\\u{1F604}'
  😄
`;

const processInput = process.argv.slice(2).join(" ");

if (processInput === "--help") {
  console.log(helpText);
  process.exit(0);
}

console.log(unescapeJs(processInput));
