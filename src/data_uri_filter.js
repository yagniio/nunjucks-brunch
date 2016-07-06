var path = require('path');
var Datauri = require('datauri');

module.exports = function(filePath) {
  var fileAbsolutePath = path.resolve(this.templatePath, filePath);
  var fileDatauri = new Datauri(fileAbsolutePath);
  return fileDatauri.content;
}