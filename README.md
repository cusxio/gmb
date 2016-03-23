# gmb

**G**enerate (node) **M**odule **B**oilerplate

> A cli tool to generate npm project boilerplate files

## Installation

```bash
$ npm install -g gmb
```

## Usage
```bash
  Generate Module Boilerplate

  Usage
    $ gmb [options]

  Options
    -b      Add .babelrc to your project.
    -e      Add .eslintrc to your project.
    -g      Add .gitignore to your project.
    -l      Add LICENSE to your project.
    -p      Add package.json to your project.
    -r      Add README.md to your project.
    -t      Add .travis.yml to your project.

  Examples
    Generate .travis.yml
    $ gmb -t

    Generate GNU license
    $ gmb --license gnu

    Generate .eslintrc, .gitignore, .babelrc
    $ gmb -egb
```

## Options

#### LICENSE
- GNU
- MIT
- Apache
- WTFPL

## Future

- Enable user arguments
- More personalize

## License

MIT © Jonathan Chan