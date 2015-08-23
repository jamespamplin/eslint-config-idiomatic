var CLIEngine = require('eslint').CLIEngine;
var cli = new CLIEngine({
  useEslintrc: false,
  rules: require('../../index').rules
});

exports.executeOnText = function(text) {
  return cli.executeOnText(text);
};

exports.executeOnFiles = function(files) {
  return cli.executeOnFiles(files);
};
