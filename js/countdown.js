var countdownDate = new Date("November 9, 2024 00:00:00").getTime();
var countdownFunction = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = countdownDate - now;

  document.querySelector(".days").innerHTML = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  document.querySelector(".hours").innerHTML = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".minutes").innerHTML = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".seconds").innerHTML = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    document.querySelector(".header__countdown").innerHTML = "¡Llegó la hora!";
  }
}, 1000);