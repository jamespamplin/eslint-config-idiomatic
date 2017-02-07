const eslint = require( './support/eslint-adapter' ),
  unusedRules = require( './rules-unused' ),
  coreRules = require( '../.eslintrc-core.json' ),

  parsedConfig = eslint.getConfigForFile( __dirname + '/../index.js' );


describe( 'ESLint Rules', () => {
  it( 'should parse core rules', () => {
    expect( parsedConfig.rules ).to.deep.equal( coreRules.rules );
  } );

  // catch when new rules are added
  it( 'should use all rules', () => {
    const allUsedRules = [].concat( Object.keys( parsedConfig.rules ), unusedRules ).sort(),
      allAvailableRules = Array.from( eslint.linterRules.keys() ).sort();

    expect( allUsedRules ).to.deep.equal( allAvailableRules );
  } );
} );
