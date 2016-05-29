var eslint = require( './support/eslint-adapter' );

describe( 'fixtures', function testFixtures() {

  it( 'should not have eslint errors on idomatic-sample.js', function testIdomaticSample() {
    var report = eslint.executeOnFiles([ './test/fixtures/idiomatic-sample.js' ]),
      messages = eslint.formatReportResults( report.results );

    expect( report.results[ 0 ].errorCount, messages ).to.equal( 0 );
    expect( report.results[ 0 ].warningCount, messages ).to.equal( 0 );
  });

});
