var _ = require('underscore');

function Isogram(string) {
  this.string = string.toLowerCase().replace(/[ -]/g, '');
}

Isogram.prototype.isIsogram = function () {
  return _.unique(this.string.split('')).length === this.string.length;
};

module.exports = Isogram;
