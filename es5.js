/*eslint-env node */

var loadConfig = require( './lib/loader' ).loadConfig;

module.exports = loadConfig( '.eslintrc-es5.json' );

module.exports[ 'extends' ] = 'idiomatic/core';
