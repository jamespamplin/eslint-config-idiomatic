var CLIEngine = require( 'eslint' ).CLIEngine,
  cli = new CLIEngine( {
    useEslintrc: false,
    configFile: '.eslintrc-core',
    envs: [ 'es6' ],
    ignore: false
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
