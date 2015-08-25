describe( '2. Beautiful Syntax', function() {

  describe( 'A. Parens, Braces, Linebreaks', function() {

    it( 'should fail when block does not start on new line', function() {
      var src = 'while ( true ) { i++; }';
      expect( src ).to.have.eslintErrors( [ 'brace-style' ] );
    } );

    it( 'should fail on control statement without braces', function() {
      var src = 'while ( true ) i++;';
      expect( src ).to.have.eslintErrors( [ 'curly' ] );
    } );

    it( 'should fail when cramped syntax around keywords', function() {
      var src = 'while( true ) {\n  i++;\n}';
      expect( src ).to.have.eslintErrors( [ 'space-after-keywords' ] );
    } );

    it( 'should fail when no space before block', function() {
      var src = 'while ( true ){\n  i++;\n}';
      expect( src ).to.have.eslintErrors( [ 'space-before-blocks' ] );
    } );

    it( 'should fail when no spacing inside block', function() {
      var src = 'while ( true ) {i++;\n}';
      expect( src ).to.have.eslintErrors( [ 'block-spacing', 'brace-style' ] );
    } );

    it( 'should fail when cramped syntax inside parentheses', function() {
      var src = 'var i;\nfor (i=0; i<100; i++) {\n  someIterativeFn();\n}';
      expect( src ).to.have.eslintErrors( [ 'space-in-parens', 'space-in-parens' ] );
    } );

    it( 'should fail when no spacing inside array literal', function() {
      var src = 'var a = [\'foo\', \'bar\'];';
      expect( src ).to.have.eslintErrors( [ 'array-bracket-spacing', 'array-bracket-spacing' ] );
    } );

    it( 'should fail when no spaces around arrow for arrow function', function() {
      var src = 'const a = b=>b*2;';
      expect( src ).to.have.eslintErrors( [ 'arrow-spacing', 'arrow-spacing' ] );
    } );

    it( 'should fail when no spacing in computed properties', function() {
      var src = 'global[\'foo\' ]';
      expect( src ).to.have.eslintErrors( [ 'computed-property-spacing' ] );
    } );

    it( 'should fail when no spacing after a comma', function() {
      var src = 'var a = [ \'foo\',\'bar\' ];';
      expect( src ).to.have.eslintErrors( [ 'comma-spacing' ] );
    } );

  } );

  describe( 'B. Assignments, Declarations, Functions ( Named, Expression, Constructor )', function() {

    it( 'should fail when variables are not declared at top of scope', function() {

      var src = 'function doSomething() {\n' +
      '  if ( true ) {\n' +
      '    first = true;\n' +
      '  }\n' +
      '  var first;\n' +
      '}';

      expect( src ).to.have.eslintErrors( [ 'vars-on-top' ] );

    } );

    it( 'should fail when more than 1 var per scope', function() {

      var src = 'var first;\nvar second = \'\';';
      expect( src ).to.have.eslintErrors( [ 'one-var' ] );

    } );

  } );

} );
