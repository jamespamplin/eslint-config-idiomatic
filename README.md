# eslint-config-idiomatic
[![NPM](https://img.shields.io/npm/v/eslint-config-idiomatic.svg)](https://www.npmjs.com/package/eslint-config-idiomatic)
[![Build](https://img.shields.io/travis/jamespamplin/eslint-config-idiomatic.svg)](https://travis-ci.org/jamespamplin/eslint-config-idiomatic)

> An [ESLint][] [shareable config] for the [idiomatic js] coding style.

Ensure your source code adheres to the [idiomatic js] coding style by linting
your code with [ESLint]. Hook ESLint into your editor and build pipeline for
maximum effect.

**Idiomatic example:**
```js
const thing = 'Hello',
  another = 'World';

function idiomatic( arg ) {
  let out = 'Bye';
  if ( !arg ) {
    out = thing;
  } else if ( arg === thing ) {
    out = another;
  }
  return out;
}
```

`eslint-config-idiomatic` also includes extra recommended linting rules to
prevent potential issues in your code. This is so that it may be dropped into
any project with minimal extra configuration necessary.

## Install
```
npm install --save-dev eslint-config-idiomatic
```

Note: use version `^1.0.0` for ESLint version `^1.x.x`.

## Usage
In your `.eslintrc` file:
```json
{
  "extends": "idiomatic"
}
```

### Overrides
You can easily override rules in your own `.eslintrc` config. For example, to
use 4 space indents instead of 2:
```json
{
  "extends": "idiomatic",
  "rules": {
    "indent": [2, 4]
  }
}
```

### ES5
`eslint-config-idiomatic` is ES6+ by default. To use ES5, extend `idiomatic/es5`
in your `.eslintrc`:
```json
{
  "extends": "idiomatic/es5"
}
```

### Idiomatic style only
`eslint-config-idiomatic` includes recommended [ESLint rules] to avoid other
potential issues in your code. To restrict to idiomatic code style only, extend
`idiomatic/core` in your `.eslintrc`:
```json
{
  "extends": "idiomatic/core",
  "rules": {
    // my additional linting rules
  }
}
```

## Slight differences
The rules enforces by this config may differ slightly from the idiomatic js
styleguide. These are outlined below.

### Strict Indent
This config restricts to **2 spaces** soft indent and will error when
indentation differs.

### Single quotes
Idiomatic does not enforce a particular style for quotes, but recommends
consistency across the project. This config enforces `'single'` quotes, but to
override to use `"double"` quotes in your project:
```json
{
  "extends": "idiomatic",
  "rules": {
    "quotes": [2, "double"]
  }
}
```

### Warn on missing function names
Names on functions are recommended as they will show in stack traces, which aids
debugging immensely. `eslint-config-idiomatic` will only issue a warning
instead of an error when a function name is omitted, which is useful for
anonymous functions.

```js
// Good (named function):
function foo() {
  return 'bar';
}

// Anonymous function (will issue warning):
var foo = function() {
  return 'bar';
};

// ES6 arrow function preferred for Anonymous functions (no warn, requires ES6+):
let foo = () => 'bar';
```

## Contributing
Issues and PRs more than welcome. Please ensure you have tests for your PRs, and
that `npm test` passes.

[ESLint]: http://eslint.org/
[ESLint rules]: http://eslint.org/docs/rules/
[shareable config]: http://eslint.org/docs/developer-guide/shareable-configs.html
[idiomatic js]: https://github.com/rwaldron/idiomatic.js
