var Gigasecond = function(the_date){
    this.the_date = the_date;
}

Gigasecond.prototype.date = function(){
  var t = new Date(this.the_date);
  t.setSeconds(t.getSeconds() + Math.pow(10,9));
  if(this.the_date.getFullYear() <= 1970){
    t.setHours(t.getHours() - 1)
  }
  return t;
}

module.exports = Gigasecond;
