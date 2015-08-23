# idomatic-eslint-config
A shareable ESLint config for the [idomatic js](https://github.com/rwaldron/idiomatic.js) coding style.

## Slight differences
The rules enforces by this config may differ slightly from the idomatic js
styleguide. These are outlined below.

### Strict Indent
This config restricts to **2 spaces** soft indent and will error when indentation differs.

## TODO

### 2.A enforce multi-line blocks
Haven't figured out how to force multi-line blocks yet.

```js
// Expect error:
if ( condition ) { /* single line block statements */ }

// Good:
if ( condition ) {
  // statements
}
```

Using `block-spacing` rule to force spacing on single line blocks for now.
