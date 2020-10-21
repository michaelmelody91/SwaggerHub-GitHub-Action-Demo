const fs = require('fs-extra')
const yaml = require('js-yaml');

const filePath = './api.yaml'

var fileContents = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'));
console.log(fileContents.info.version)