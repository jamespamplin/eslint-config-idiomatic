var fs = require('fs');
var path = require('path');

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '.eslintrc-es5')));

module.exports.extends = 'idiomatic/core';
