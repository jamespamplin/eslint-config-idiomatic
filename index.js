/*eslint-env node */

var loadConfig = require( './lib/loader' ).loadConfig;

module.exports = loadConfig( '.eslintrc' );

module.exports[ 'extends' ] = 'idiomatic/es5';
