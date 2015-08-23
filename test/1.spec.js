var CLIEngine = require('eslint').CLIEngine;
var cli = new CLIEngine();

var expect = require('chai').expect;

describe( '1. Whitespace', function() {

  it( 'should use 2 spaces for indent', function() {

    var report = cli.executeOnText('if ( true ) {\n  var test = "fail"; }');

    expect(report.results[0].errorCount).to.equal(0);

  } );


  it( 'should fail when 2 spaces are not used for indentation', function() {

    var report = cli.executeOnText('if ( true ) {\n\tvar test = "fail"; }');

    expect(report.results[0].errorCount).to.equal(1);

  } );


  it( 'should fail when tabs are mixed with spaces for indent', function() {

    var report = cli.executeOnText(
      'if ( true ) {\n' +
      '  var test = \'fail\';\n' +
      '  if (true) {\n' +
      '\t  test = \'ok\'\n' +
      '  }\n' +
      '}\n'
    );

    expect(report.results[0].errorCount).to.equal(1);

  } );

} );