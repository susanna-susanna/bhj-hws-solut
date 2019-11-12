const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let file = new FormData();
  if (file) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    xhr.onprogress = function(e) {
      progress.value = e.loaded / 10000000;
    };
    xhr.send(file);
  }
})
