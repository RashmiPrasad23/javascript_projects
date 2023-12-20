//set time in clock
//document.getElementById('clock')
const clock = document.querySelector('#clock');

//to keep running the date on some interval

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);