let intervalId;
const randomColor = function () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const changeColor = function () {
  document.querySelector('body').style.backgroundColor = randomColor();
};
document.querySelector('#start').addEventListener('click', function () {
  intervalId = setInterval(changeColor, 1000);
  console.log('start');
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId);
  console.log('stop');
});
