#!/usr/bin/env node
import meow from 'meow';
import unescapeJs from 'unescape-js';

const cli = meow(`
    Outputs the passed text to the command line. Supports escape sequences (\\n, \\t and others).

    Usage
      $ echo-cli <input>
 
    Examples
      $ echo-cli Hello, world!
      Hello, world!
      
      $ echo-cli Hello,\nworld!
      Hello,
      world!
`, {importMeta: import.meta});

console.log(unescapeJs(cli.input.join(' ')));