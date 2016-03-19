#!/usr/bin/env node
'use strict';

import meow from 'meow';
import updateNotifier from 'update-notifier';
import chalk from 'chalk';
import denodeify from 'denodeify';
import fs from 'fs';
const writeFile = denodeify(fs.writeFile);


import template from './template';

const cli = meow(`
    Usage
      $ gmb [options]

    Options
      -b      Add ${chalk.yellow.bold('.babelrc')} to your project.
      -e      Add ${chalk.yellow.bold('.eslintrc')} to your project.
      -g      Add ${chalk.yellow.bold('.gitignore')} to your project.
      -l      Add ${chalk.yellow.bold('LICENSE')} to your project.
      -p      Add ${chalk.yellow.bold('package.json')} to your project.
      -r      Add ${chalk.yellow.bold('README.md')} to your project.
      -t      Add ${chalk.yellow.bold('.travis.yml')} to your project.

    Examples
      Generate .travis.yml
      $ gmb -t

      Generate .eslintrc, .gitignore, .babelrc
      $ gmb -egb
`, {
    boolean: ['b', 'e', 'g', 'l', 'p', 'r', 't'],
});

updateNotifier({ pkg: cli.pkg }).notify();

const fileTypes = {
    b: '.babelrc',
    e: '.eslintrc',
    g: '.gitignore',
    l: 'LICENSE',
    p: 'package.json',
    r: 'README.md',
    t: '.travis.yml',
};

const flags = cli.flags;

function parseFlags(flags) {
    let opts = [];
    for (var key in flags) {
        if (flags[key] && fileTypes.hasOwnProperty(key)) {
            if (typeof flags[key] === 'string') {
                let temp = {};
                temp[key] = flags[key];
                opts.push(temp);
            } else {
                opts.push(key);
            }
        }
    }
    return opts;
}

const opts = parseFlags(flags);

function gen(opt) {
    writeFile(fileTypes[opt], template[opt]).then(function (err) {
        if (err) {
            throw err;
        }
        console.log(`Generated ${chalk.yellow.bold(fileTypes[opt])}`);
    });
}

function init() {
    opts.forEach(opt => {
        if (typeof opt === 'string') {
            gen(opt);
        }
    });
}

init();

