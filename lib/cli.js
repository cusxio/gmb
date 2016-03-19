#!/usr/bin/env node

'use strict';

var _meow = require('meow');

var _meow2 = _interopRequireDefault(_meow);

var _updateNotifier = require('update-notifier');

var _updateNotifier2 = _interopRequireDefault(_updateNotifier);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _denodeify = require('denodeify');

var _denodeify2 = _interopRequireDefault(_denodeify);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var writeFile = (0, _denodeify2.default)(_fs2.default.writeFile);

var cli = (0, _meow2.default)('\n    Usage\n      $ gmb [options]\n\n    Options\n      -b      Add ' + _chalk2.default.yellow.bold('.babelrc') + ' to your project.\n      -e      Add ' + _chalk2.default.yellow.bold('.eslintrc') + ' to your project.\n      -g      Add ' + _chalk2.default.yellow.bold('.gitignore') + ' to your project.\n      -l      Add ' + _chalk2.default.yellow.bold('LICENSE') + ' to your project.\n      -p      Add ' + _chalk2.default.yellow.bold('package.json') + ' to your project.\n      -r      Add ' + _chalk2.default.yellow.bold('README.md') + ' to your project.\n      -t      Add ' + _chalk2.default.yellow.bold('.travis.yml') + ' to your project.\n\n    Examples\n      Generate .travis.yml\n      $ gmb -t\n\n      Generate .eslintrc, .gitignore, .babelrc\n      $ gmb -egb\n', {
    boolean: ['b', 'e', 'g', 'l', 'p', 'r', 't']
});

(0, _updateNotifier2.default)({ pkg: cli.pkg }).notify();

var fileTypes = {
    b: '.babelrc',
    e: '.eslintrc',
    g: '.gitignore',
    l: 'LICENSE',
    p: 'package.json',
    r: 'README.md',
    t: '.travis.yml'
};

var flags = cli.flags;

function parseFlags(flags) {
    var opts = [];
    for (var key in flags) {
        if (flags[key] && fileTypes.hasOwnProperty(key)) {
            if (typeof flags[key] === 'string') {
                var temp = {};
                temp[key] = flags[key];
                opts.push(temp);
            } else {
                opts.push(key);
            }
        }
    }
    return opts;
}

var opts = parseFlags(flags);

function gen(opt) {
    writeFile(fileTypes[opt], _template2.default[opt]).then(function (err) {
        if (err) {
            throw err;
        }
        console.log('Generated ' + _chalk2.default.yellow.bold(fileTypes[opt]));
    });
}

function init() {
    opts.forEach(function (opt) {
        if (typeof opt === 'string') {
            gen(opt);
        }
    });
}

init();