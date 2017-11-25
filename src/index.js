const pad = require('lodash.pad');
const padStart = require('lodash.padstart');
const padEnd = require('lodash.padend');

module.exports.padThai = function(string, length) {
  return pad(string, length, 'thai');
};

module.exports.padThaiStart = function(string, length) {
  return padStart(string, length, 'thai');
};

module.exports.padThaiEnd = function(string, length) {
  return padEnd(string, length, 'thai');
};
