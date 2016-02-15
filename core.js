/*eslint-env node */

var loadConfig = require( './lib/loader' ).loadConfig;

module.exports = loadConfig( '.eslintrc-core.json' );
