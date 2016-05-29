/**
 * Chai assertions to provide the following helpers:
 *  - expect(src).to.have.eslintErrors
 *  - expect(src).to.have.eslintErrors( [ 'space-after-keywords' ] )
 *  - expect(src).to.not.have.eslintErrors
 */

var Assertion = require( 'chai' ).Assertion,
  eslint = require( './eslint-adapter' );


// from deep-eql, compare 2 iterables for equality
function iterableEqual( a, b ) {
  var i = 0,
    match = true;

  if ( a.length !== b.length ) {
    return false;
  }

  for ( ; i < a.length; i++ ) {
    if ( a[ i ] !== b[ i ]) {
      match = false;
      break;
    }
  }

  return match;
}


Assertion.addMethod( 'eslintErrors', function assertEslintErrors( expectedRules ) {
  var obj = this._obj,
    report,
    results,
    messages,
    resultRules;

  new Assertion( obj ).to.be.a( 'string' );

  report = eslint.executeOnText( obj );
  results = report.results[ 0 ] || {};

  messages = eslint.formatReportResults( report.results );
  resultRules = results.messages.map( function extractRuleId( m ) {
    return m.ruleId;
  });

  this.assert(
    report.errorCount > 0 && Array.isArray( results.messages ) &&
      iterableEqual( resultRules, expectedRules ),
    'expected #{this} to have #{exp} eslint errors, but got:\n' + messages,
    'expected #{this} to not have #{exp} eslint errors, but got:\n' + messages,
    expectedRules,
    resultRules,
    true
  );
});
