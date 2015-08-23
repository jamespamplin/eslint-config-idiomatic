var eslint = require( './support/eslint-adapter' );

describe( '2. Beautiful Syntax', function() {

  describe( 'A. Parens, Braces, Linebreaks', function() {

    it( 'should fail when cramped syntax around keywords', function() {
      var src = 'while( true ) i++;';
      expect( src ).to.have.eslintErrors( [ 'space-after-keywords' ] );
    } );

    it( 'should fail when no space before block', function() {
      var src = 'while ( true ){ i++; }';
      expect( src ).to.have.eslintErrors( [ 'space-before-blocks' ] );
    } );

    it( 'should fail when no spacing inside block', function() {
      var src = 'while ( true ) {i++; }';
      expect( src ).to.have.eslintErrors( [ 'block-spacing' ] );
    } );

    it( 'should fail when cramped syntax inside parentheses', function() {
      var src = 'var i;\nfor (i=0; i<100; i++) someIterativeFn();';
      expect( src ).to.have.eslintErrors( [ 'space-in-parens', 'space-in-parens' ] );
    } );

    it.skip( 'should show no errors or warnings on idomatic source', function() {

      var report = eslint.executeOnFiles( ['./test/fixtures/2.A.1.1.js'] );

      expect( report.results[0].errorCount ).to.equal( 0 );
      expect( report.results[0].warningCount ).to.equal( 0 );

    } );


    it.skip( 'should show errors on non-idomatic source', function() {

      var report = eslint.executeOnFiles( ['./test/fixtures/2.A.1.1.bad.js'] );

      expect( report.results[0].errorCount ).to.not.equal( 0 );
      expect( report.results[0].warningCount ).to.equal( 0 );

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
