const pad = require('lodash.pad');

module.exports.padThai = function(string, length) {
  return pad(string, length, 'thai');
};
