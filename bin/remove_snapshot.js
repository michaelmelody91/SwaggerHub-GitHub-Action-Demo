const fs = require('fs-extra')
const yaml = require('js-yaml');

const filePath = './api.yaml'

var fileContents = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
var pos = fileContents.info.version.indexOf('-SNAPSHOT');
if ( pos < 0 ) pos = fileContents.info.version.length;
fileContents.info.version = pos < 0
    ? fileContents.info.version : fileContents.info.version.substring(0, pos)
fs.writeFileSync(filePath, yaml.safeDump(fileContents))