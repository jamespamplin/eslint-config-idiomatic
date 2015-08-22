var CLIEngine = require("eslint").CLIEngine;
var cli = new CLIEngine();

var report = cli.executeOnFiles(["./test/fixtures/"]);

console.log(JSON.stringify(report, null, '  '));
