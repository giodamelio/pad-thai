const pad = require('lodash.pad');

module.exports = function(string, length) {
  return pad(string, length, 'thai');
};
