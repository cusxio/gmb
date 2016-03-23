export default function pkg(opt = 'name') {
    return `{
    "name": ${opt},
    "version": "0.0.1",
    "description": "important",
    "license": "MIT",
    "repository": {
        "type": "git",
        "url": "https://github.com/cusxio/name.git"
    },
    "author": {
        "name": "Jonathan Chan",
        "email": "cusxio@gmail.com"
    },
    "engines": {
        "node": ">=4"
    },
    "scripts": {
        "test": "mocha"
    },
    "files": [
        "index.js"
    ],
    "keywords": [
        "name"
    ],
    "dependencies": {
    },
    "devDependencies": {
    }
}`;
}
