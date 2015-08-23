# eslint-config-idiomatic
A shareable ESLint config for the [idiomatic js](https://github.com/rwaldron/idiomatic.js) coding style.

## Slight differences
The rules enforces by this config may differ slightly from the idiomatic js
styleguide. These are outlined below.

### Strict Indent
This config restricts to **2 spaces** soft indent and will error when indentation differs.

### Warn on missing function names
Names on functions are recommended as they will show in stack traces, which aids debugging immensely. `idiomatic-eslint-config` will only issue a warning instead of an error when a function name is omitted, which is useful for anonymous functions.

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

## TODO

### 2.A enforce end of block brace on new line

```js
// Expect error:
while ( true ) {
  i++; }

// Good:
while ( true ) {
  i++;
}
```

### 2.B enforce single variable declarations on a new line

```js
// Expect error:
var foo = "bar", num = 1;

// Good:
var foo = "bar",
  num = 1,
  undef;
```
