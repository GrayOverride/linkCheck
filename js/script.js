Date.prototype.getWeekNumber = function(){

    var d = new Date(+this);
    d.setHours(0,0,0);
    d.setDate(d.getDate()+4-(d.getDay()||7));
    return Math.ceil((((d-new Date(d.getFullYear(),0,1))/8.64e7)+1)/7);
};

document.addEventListener('DOMContentLoaded', function() {
  var monthNames = [
     "Januari", "Februari", "Mars",
     "April", "Maj", "Juni", "Juli",
     "Augusti", "September", "Oktober",
     "November", "December"
 ];
  var date = new Date().getWeekNumber();
  var themeDay = new Date(); //ja jag vet
  var currentDay = themeDay.getDate() +" "+ monthNames[themeDay.getMonth()];
  var today = "";
  var statement = "Och inget spännande händer idag, damn!";
for (var i = 0; i < Data.collection.length; i++) {
if (currentDay === Data.collection[i].date) {
  today = Data.collection[i].theme
  if (isOdd(date) === 1) {
    statement = "Awesome! vad sägs som att fira "+today;
  }else {
    statement = "Vilket är lite synd för idag kan man fira "+today;
  }
}
}
  function isOdd(num) { return num % 2;}
  if (isOdd(date) === 1) {
    var div = document.getElementById('wrapper');
    var theme = document.getElementById('theme');

  div.innerHTML = div.innerHTML + 'Ja!';
  theme.innerHTML = theme.innerHTML + statement;

  }else {
    var div = document.getElementById('wrapper');
    var theme = document.getElementById('theme');

  div.innerHTML = div.innerHTML + 'Nej :(';
  theme.innerHTML = theme.innerHTML + statement;

  }

}, false);
