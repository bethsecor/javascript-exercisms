function PhoneNumber (phoneNumber) {
  this.phoneNumber = phoneNumber;
}

PhoneNumber.prototype.number = function () {
  var cleanNumber = this.phoneNumber.replace(/[^0-9]/g,'');
  if (usaNumber(cleanNumber)) {
    return cleanNumber.slice(1,11);
  } else if (invalidNumber(cleanNumber)) {
    return '0000000000';
  } else {
    return cleanNumber;
  }
};

PhoneNumber.prototype.areaCode = function () {
  return this.number().slice(0,3);
};

PhoneNumber.prototype.toString = function () {
  var number = this.number();
  return '(' + number.slice(0,3) + ') ' + number.slice(3,6) + '-' + number.slice(6,10);
};

function usaNumber(number) {
  return number.length === 11 & number.slice(0,1) === '1';
}

function invalidNumber(number) {
  return number.length !== 10;
}

module.exports = PhoneNumber;
