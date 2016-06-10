function Words () {}

Words.prototype.count = function (string) {
  var words = string.toLowerCase()
                    .trim()
                    .replace(/  +/g, ' ')
                    .split(/[ \n\t]/);
  var counts = {};

  words.forEach(function(word){
    if (counts[word] && counts[word] >= 1) {
      counts[word] += 1;
    } else {
      counts[word] = 1;
    }
  });

  return counts;
};

module.exports = Words;
