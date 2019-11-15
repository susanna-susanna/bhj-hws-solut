const editor = document.querySelector('#editor');
console.log(editor);

editor.addEventListener('change', function() {
  console.log(editor.value);
  //localStorage.setItem('value', 'editor.value');
  localStorage['value'] = editor.value;
})

window.addEventListener('load', function() {
  editor.value = localStorage.getItem('value');
})

const button = document.createElement('button');
document.querySelector('body').appendChild(button);
button.innerText = "clear";
button.addEventListener('click', function(event) {
  event.preventDefault();
  editor.value = '';
  localStorage.setItem('value', '');
})

