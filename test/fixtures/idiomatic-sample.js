// 2.A.1.1
// Use whitespace to promote readability
function style2A11() {
  var i,
    condition = true,
    length = 100;

  if ( condition ) {
    // statements
  }

  while ( condition ) {
    // statements
  }

  for ( i = 0; i < 100; i++ ) {
    // statements
  }

  // Even better:
  for ( i = 0; i < length; i++ ) {
    // statements
  }
}

// Or...
function style2A112() {
  var i = 0,
    length = 100;

  for ( ; i < length; i++ ) {
    // statements
  }
}


function style2A113() {
  var prop,
    object = {};

  for ( prop in object ) {
    // statements
  }

  if ( true ) {
    // statements
  } else {
    // statements
  }
}

function style2A114() {
  var a = [ 'foo', 'bar' ];
  return a;
}


// 2.B.1.2
// Using only one `var` per scope (function) promotes readability
// and keeps your declaration list free of clutter (also saves a few keystrokes)
function style2B12() {
  // Good
  var foo = '',
    bar = '',
    qux;
}

// Ensure multi-line member expressions, the "dot" stays with the property and not the object
function style2x() {
  var foo = [ 'foo1', 'foo2' ];

  return foo
    .map( function fooMap( f ) {
      return f + ' bar';
    });
}
