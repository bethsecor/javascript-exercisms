var Hamming = function() {};

Hamming.prototype.compute = function(strandOne, strandTwo) {
  var nucleicAcidsOne = strandOne.split("");
  var nucleicAcidsTwo = strandTwo.split("");
  if (nucleicAcidsOne.length != nucleicAcidsTwo.length){
    throw new Error('DNA strands must be of equal length.')
  } else {
    var comparison = nucleicAcidsOne.map(function(na, i){
      return nucleicAcidsOne[i] != nucleicAcidsTwo[i]
    });
    return comparison.reduce(function(a, b) { return a + b; }, 0);
  }
};

module.exports = Hamming;
