/*eslint-env node*/

var fs = require( 'fs' ),
  path = require( 'path' );

/**
 * Loads and parses eslintconfig files.
 */
exports.loadConfig = function loadConfig( filename ) {
  var filePath = path.join( __dirname, '..', filename ),
    fileContents = fs.readFileSync( filePath );

  return parseConfig( fileContents );
};

function parseConfig( configString ) {
  try {
    return JSON.parse( configString );

  } catch ( error ) {
    throw new Error( 'Unexpected error parsing eslint-config-idiomatic: ' + error );
  }
}
