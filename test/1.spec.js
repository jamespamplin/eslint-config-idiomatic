describe( '1. Whitespace', function() {

  it( 'should use 2 spaces for indent', function() {

    var src = 'var test;\nif ( true ) {\n  test = "fail"; }\n';

    expect( src ).to.not.have.eslintErrors;

  } );


  it( 'should fail when 2 spaces are not used for indentation', function() {

    var src = 'var test;\nif ( true ) {\n\ttest = "fail"; }\n';

    expect( src ).to.have.eslintErrors( [ 'indent' ] );

  } );


  it( 'should fail when tabs are mixed with spaces for indent', function() {

    var src =
      'var test;\n' +
      'if ( true ) {\n' +
      '  test = \'fail\';\n' +
      '  if ( true ) {\n' +
      '\t  test = \'ok\'\n' +
      '  }\n' +
      '}\n';

    expect( src ).to.have.eslintErrors( [ 'no-mixed-spaces-and-tabs', 'indent' ] );

  } );

  it( 'should fail when no line at end of file', function() {
    var src = 'var test = 1;';

    expect( src ).to.have.eslintErrors( [ 'eol-last' ] );
  } );

} );
