const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let file = new FormData();
  if (file) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php", true);
    xhr.upload.onprogress = function(e) {
      progress.value = e.loaded / e.total;
    };
    xhr.send(file);
  }
})
