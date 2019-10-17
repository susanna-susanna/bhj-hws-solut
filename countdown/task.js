let timer = document.getElementById('timer');

let timerId = setInterval(function() {
  timer.textContent--;
  if (Number(timer.textContent) === 0) {
    clearInterval(timerId);
    alert('You win');
  }
}, 1000);
