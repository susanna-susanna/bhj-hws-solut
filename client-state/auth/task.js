const signin = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
//let xhr = new XMLHttpRequest();

window.addEventListener('load', () => {
  //signin.classList.add('signin_active');
  try {
    let greeting = localStorage.getItem('auth');
    console.log(greeting)

    welcome.classList.add('welcome_active');
    userId.innerText = greeting;

  } catch(e) {
      signin.classList.add('signin_active');
      return null;
  }
});

function logIn() {
  let xhr = new XMLHttpRequest();
  let client = new FormData();

  client.append('login', signinForm.elements.login.value);
  client.append('password', signinForm.elements.password.value);

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  xhr.send(client);

  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      if (data.success) {
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userId.innerText = data.user_id;
        localStorage.auth = data.user_id;
      } else {
        alert("Неверные логин/пароль");
      }

      signinForm.reset();
    }
  })
}

signinBtn.addEventListener('click', event => {
  event.preventDefault();
  logIn();
})

signinForm.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    logIn();
  }
})
