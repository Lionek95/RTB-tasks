var promoDate = new Date("Apr 4, 2022 23:59:59").getTime();

var promoCounter = setInterval(function() {

  var finish = new Date().getTime();
    
  var finishDate = promoDate - finish;
    
  var days = Math.floor(finishDate / (1000 * 60 * 60 * 24));
  var hours = Math.floor((finishDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((finishDate % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((finishDate % (1000 * 60)) / 1000);
    
  document.getElementById("days").innerHTML = days + "dni";
  document.getElementById("hours").innerHTML = hours + "godzin";
  document.getElementById("minutes").innerHTML = minutes + "minut";
  document.getElementById("seconds").innerHTML = seconds + "sekund";
  
 if (days <= 0) {
    document.getElementById("days").style.display = 'none';
  }
  else {
    document.getElementById("days").style.display = 'block';
  }

  if (hours <= 0) {
    document.getElementById("hours").style.display = 'none';
  }
  else {
    document.getElementById("hours").style.display = 'block';
  }
    
  if (minutes <= 0) {
    document.getElementById("minutes").style.display = 'none';
  }
  else {
    document.getElementById("minutes").style.display = 'block';
  }

  if (finishDate <= 0) {
    document.getElementById("counter").style.display = 'none';
  }
  else {
    document.getElementById("counter").style.display = 'flex';
  }
}, 1000);