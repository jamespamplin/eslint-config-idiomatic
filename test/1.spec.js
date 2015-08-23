var eslint = require( './support/eslint-adapter' );

var expect = require( 'chai' ).expect;

describe( '1. Whitespace', function() {

  it( 'should use 2 spaces for indent', function() {

    var report = eslint.executeOnText( 'var test;\nif ( true ) {\n  test = "fail"; }' );

    expect( report.results[0].errorCount ).to.equal( 0 );

  } );


  it( 'should fail when 2 spaces are not used for indentation', function() {

    var report = eslint.executeOnText( 'var test;\nif ( true ) {\n\ttest = "fail"; }' );

    expect( report.results[0].errorCount ).to.equal( 1 );

  } );


  it( 'should fail when tabs are mixed with spaces for indent', function() {

    var report = eslint.executeOnText(
      'var test;\n' +
      'if ( true ) {\n' +
      '  test = \'fail\';\n' +
      '  if ( true ) {\n' +
      '\t  test = \'ok\'\n' +
      '  }\n' +
      '}\n'
    );

    expect( report.results[0].errorCount ).to.equal( 2 );

  } );

} );
