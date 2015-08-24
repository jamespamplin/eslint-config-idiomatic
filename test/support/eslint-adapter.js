var CLIEngine = require( 'eslint' ).CLIEngine;
var cli = new CLIEngine( {
  useEslintrc: false,
  configFile: '.eslintrc'
} );

exports.executeOnText = function executeOnText( text ) {
  return cli.executeOnText( text );
};

exports.executeOnFiles = function executeOnFiles( files ) {
  return cli.executeOnFiles( files );
};

exports.formatReportResults = function formatReportResults( results ) {
  return cli.getFormatter( 'compact' )( results );
};
