# echo-cli

[![npm](https://img.shields.io/npm/v/echo-cli.svg?maxAge=2592000&style=flat-square)](https://www.npmjs.com/package/unescape-js) [![Travis branch](https://img.shields.io/travis/iamakulov/echo-cli/master.svg?maxAge=2592000&style=flat-square)](https://travis-ci.org/iamakulov/unescape-js) [![Coveralls](https://img.shields.io/coveralls/iamakulov/echo-cli.svg?maxAge=2592000&style=flat-square)](https://coveralls.io/github/iamakulov/unescape-js)

> A cross-platform CLI for outputting text to the command line

Why? Because Windows’ CMD doesn’t support escape sequences, and even [a new line is printed differently from Bash](http://stackoverflow.com/a/132804/1192426).

`echo-cli` supports all JavaScript escape sequences described [on the according MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings) including ES2015 Unicode code point escapes (`\u{XXXXX}`). Feel free to open an issue if you need Bash escape sequences too.

## Install

```
npm install --global echo-cli
```

## Usage 

```sh
$ echo-cli Hello, world!
Hello, world!

$ echo-cli Hello,\nworld!
Hello,
world!

$ echo-cli Hello,\\nworld!
Hello,\nworld!
```

## License

MIT © [Ivan Akulov](http://iamakulov.com)