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
      -b               Add ${chalk.yellow.bold('.babelrc')} to your project.
      -e               Add ${chalk.yellow.bold('.eslintrc')} to your project.
      -g               Add ${chalk.yellow.bold('.gitignore')} to your project.
      --license, -l    Add ${chalk.yellow.bold('LICENSE')} to your project.
      -p               Add ${chalk.yellow.bold('package.json')} to your project.
      -r               Add ${chalk.yellow.bold('README.md')} to your project.
      -t               Add ${chalk.yellow.bold('.travis.yml')} to your project.

    Examples
      Generate .travis.yml
      $ gmb -t

      Generate GNU license
      $ gmb --license gnu

      Generate .eslintrc, .gitignore, .babelrc
      $ gmb -egb
`, {
    string: [
        'license',
    ],
    boolean: [
        'b',
        'e',
        'g',
        'p',
        'r',
        't',
    ],
    alias: {
        l: 'license',
    },
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

function writter(opt) {
    writeFile(fileTypes[opt], template(opt)).then(function (err) {
        if (err) {
            throw err;
        }
        console.log(`Generated ${chalk.yellow.bold(fileTypes[opt])}`);
    });
}

function gen(opt) {
    writter(opt);
}

function customWritter(opt) {
    writeFile(fileTypes[opt.key], template(opt)).then(function (err) {
        if (err) {
            throw err;
        }
        console.log(`Generated ${chalk.yellow.bold(fileTypes[opt.key])}`);
    });
}

function genCustom(opt) {
    if (opt.key.length === 1) {
        customWritter(opt);
    }
}

function init() {
    for (var key in flags) {
        if (flags.hasOwnProperty(key)) {
            if (flags[key] === true) {
                gen(key);
            } else if (typeof flags[key] === 'string') {
                genCustom({
                    key,
                    custom: flags[key],
                });
            }
        }
    }
}

init();

