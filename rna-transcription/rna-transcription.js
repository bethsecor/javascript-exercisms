var DnaTranscriber = function() {};
var rnaDictionary = {G: "C", C: "G", T: "A", A: "U"}

DnaTranscriber.prototype.toRna = function(strand) {
  var nucleotides = strand.split("");
  return nucleotides.map(function(dna){
    return rnaDictionary[dna]
  }).join('')
};

module.exports = DnaTranscriber;
