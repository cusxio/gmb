'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pkg;
function pkg() {
    var opt = arguments.length <= 0 || arguments[0] === undefined ? 'name' : arguments[0];

    return '{\n    "name": ' + opt + ',\n    "version": "0.0.1",\n    "description": "important",\n    "license": "MIT",\n    "repository": {\n        "type": "git",\n        "url": "https://github.com/cusxio/name.git"\n    },\n    "author": {\n        "name": "Jonathan Chan",\n        "email": "cusxio@gmail.com"\n    },\n    "engines": {\n        "node": ">=4"\n    },\n    "scripts": {\n        "test": "mocha"\n    },\n    "files": [\n        "index.js"\n    ],\n    "keywords": [\n        "name"\n    ],\n    "dependencies": {\n    },\n    "devDependencies": {\n    }\n}';
}