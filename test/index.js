import test from 'ava';
import  { exec } from 'child_process';

const echoCli = './dist/index.js';

test.cb('one word is passed', t => {
    exec(`node ${echoCli} Word`, (error, stdout, stderr) => {
        t.falsy(error);
        t.is(stdout, 'Word\n');
        t.is(stderr, '');
        t.end();
    });
});

test.cb('multiple words are passed', t => {
    exec(`node ${echoCli} Three Great Words`, (error, stdout, stderr) => {
        t.falsy(error);
        t.is(stdout, 'Three Great Words\n');
        t.is(stderr, '');
        t.end();
    });
});

test.cb('nothing is passed', t => {
    exec(`node ${echoCli}`, (error, stdout, stderr) => {
        t.falsy(error);
        t.is(stdout, '\n');
        t.is(stderr, '');
        t.end();
    });
});

test.cb('an escape sequence is passed', t => {
    exec(`node ${echoCli} "Hello,\\nWorld"`, (error, stdout, stderr) => {
        t.falsy(error);
        t.is(stdout, 'Hello,\nWorld\n');
        t.is(stderr, '');
        t.end();
    });
});