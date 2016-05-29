/*eslint func-names:0 */

describe( '2. Beautiful Syntax', function() {

  describe( 'A. Parens, Braces, Linebreaks', function() {

    it( 'should fail when block does not start on new line', function() {
      var src = 'while ( true ) { i++; }\n';
      expect( src ).to.have.eslintErrors([ 'brace-style', 'brace-style' ]);
    });

    it( 'should fail on control statement without braces', function() {
      var src = 'while ( true ) i++;\n';
      expect( src ).to.have.eslintErrors([ 'curly' ]);
    });

    it( 'should fail when cramped syntax around keywords', function() {
      var src = 'while( true ) {\n  i++;\n}\n';
      expect( src ).to.have.eslintErrors([ 'keyword-spacing' ]);
    });

    it( 'should fail when no space before block', function() {
      var src = 'while ( true ){\n  i++;\n}\n';
      expect( src ).to.have.eslintErrors([ 'space-before-blocks' ]);
    });

    it( 'should fail when no spacing inside block', function() {
      var src = 'while ( true ) {i++;\n}\n';
      expect( src ).to.have.eslintErrors([ 'block-spacing', 'brace-style' ]);
    });

    it( 'should fail when cramped syntax inside parentheses', function() {
      var src = 'var i;\nfor (i = 0; i < 100; i++) {\n  someIterativeFn();\n}\n';
      expect( src ).to.have.eslintErrors([ 'space-in-parens', 'space-in-parens' ]);
    });

    it( 'should fail when no spacing inside array literal', function() {
      var src = 'var a = [\'foo\', \'bar\'];\n';
      expect( src ).to.have.eslintErrors([ 'array-bracket-spacing', 'array-bracket-spacing' ]);
    });

    it( 'should fail when no spaces around arrow for arrow function', function() {
      var src = 'const a = b=>b * 2;\n';
      expect( src ).to.have.eslintErrors([ 'arrow-spacing', 'arrow-spacing' ]);
    });

    it( 'should fail when no spacing in computed properties', function() {
      var src = 'global[\'foo\' ]\n';
      expect( src ).to.have.eslintErrors([ 'computed-property-spacing' ]);
    });

    it( 'should fail when no spacing after a comma', function() {
      var src = 'var a = [ \'foo\',\'bar\' ];\n';
      expect( src ).to.have.eslintErrors([ 'comma-spacing' ]);
    });

    it( 'should fail when spacing before object key', function() {
      var src = 'var foo = { bar : 1 };\n';
      expect( src ).to.have.eslintErrors([ 'key-spacing' ]);
    });

    it( 'should fail when no spacing inside object braces', function() {
      var src = 'var foo = {bar: 1};\n';
      expect( src ).to.have.eslintErrors([ 'object-curly-spacing', 'object-curly-spacing' ]);
    });

    it( 'should fail when spaces in function calls', function() {
      var src = 'foo ( 1 );\n';
      expect( src ).to.have.eslintErrors([ 'no-spaced-func' ]);
    });

    it( 'should fail when space before function parentheses', function() {
      var src = 'function foo ( arg ) {\n}\n';
      expect( src ).to.have.eslintErrors([ 'space-before-function-paren' ]);
    });

  });

  describe( 'B. Assignments, Declarations, Functions ( Named, Expression, Constructor )', function() {

    it( 'should fail when variables are not declared at top of scope', function() {

      var src = 'function doSomething() {\n' +
      '  if ( true ) {\n' +
      '    first = true;\n' +
      '  }\n' +
      '  var first;\n' +
      '}\n';

      expect( src ).to.have.eslintErrors([ 'vars-on-top' ]);

    });

    it( 'should fail when more than 1 var per scope', function() {

      var src = 'var first;\nvar second = \'\';\n';
      expect( src ).to.have.eslintErrors([ 'one-var' ]);

    });

    it( 'should fail when multiple variables on same line', function() {
      var src = 'var first = 1, second = 2;\n';
      expect( src ).to.have.eslintErrors([ 'one-var-declaration-per-line' ]);
    });

    it( 'should fail when no spacing around operators', function() {
      var src = 'var foo = 1+1;\n';
      expect( src ).to.have.eslintErrors([ 'space-infix-ops' ]);
    });

    it( 'should fail when no spacing around return statement', function() {
      var src = 'function foo() {\n  return-1;\n}\n';
      expect( src ).to.have.eslintErrors([ 'keyword-spacing' ]);
    });

    it( 'should fail when no space after unary word operator', function() {
      var src = 'typeof!foo;\n';
      expect( src ).to.have.eslintErrors([ 'space-unary-ops' ]);
    });

    it( 'should fail when space next to unary non-word operator', function() {
      var src = 'var foo = foo ++;\n';
      expect( src ).to.have.eslintErrors([ 'space-unary-ops' ]);
    });

    it( 'should fail when excess spacing in statements', function() {
      var src = 'var foo  = 1;\n';
      expect( src ).to.have.eslintErrors([ 'no-multi-spaces' ]);
    });

    it( 'should fail on multi-line member expression when "dot" is not on new line', function() {
      var src = 'var foo = bar.\nmap( function mapBar() { } );\n';
      expect( src ).to.have.eslintErrors([ 'dot-location' ]);
    });

  });

  describe( 'C. Exceptions', function() {
    it( 'function callbacks', function() {
      var src =
        'foo( function cb() {\n' +
        '  // thing\n' +
        '})\n';
      expect( src ).to.have.eslintErrors([ 'dot-location' ]);
    });
  });

  describe( 'E. Quotes', function() {
    it( 'should fail when not using single quotes', function() {
      var src = 'var first = "hi";\n';
      expect( src ).to.have.eslintErrors([ 'quotes' ]);
    });
  });

});
