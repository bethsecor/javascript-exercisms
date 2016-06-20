function BeerSong() {

}

BeerSong.prototype.verse = function (number) {
  return `${pluralizeBottle(number).capitalizeFirstLetter()} of beer on the wall, ${pluralizeBottle(number)} of beer.\n${lastSentence(number)}`;
};

BeerSong.prototype.sing = function (start, stop) {
  var stop = typeof stop !== 'undefined' ?  stop : 0;
  song = "";
  for (var i = start; i >= stop; i--){
    song += this.verse(i);
    if (i !== stop) { song += "\n"; }
  }
  return song;
};

function pluralizeBottle(number) {
  if (number > 1) {
    return `${number} bottles`;
  } else if (number === 1) {
    return '1 bottle';
  } else {
    return 'no more bottles';
  }
}

function itOrOne(number) {
  if (number > 1) {
    return 'one';
  } else {
    return 'it';
  }
}

function lastSentence(number) {
  if (number > 0) {
    return `Take ${itOrOne(number)} down and pass it around, ${pluralizeBottle(number-1)} of beer on the wall.\n`;
  } else {
    return 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
  }
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

module.exports = BeerSong;
