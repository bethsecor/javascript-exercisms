var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.trim() === '') {
    return 'Fine. Be that way!';
  } else if (input.toUpperCase() === input && input.search(/[a-zA-Z]/) !== -1) {
    return 'Whoa, chill out!';
  } else if (input.slice(-1) === "?") {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;
