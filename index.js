/*eslint-env node */

var loadConfig = require( './lib/loader' ).loadConfig;

module.exports = loadConfig( '.eslintrc.json' );

module.exports[ 'extends' ] = 'idiomatic/core';
