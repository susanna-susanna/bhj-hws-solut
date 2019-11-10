const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');
const request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
request.send();

request.addEventListener('readystatechange', function() {
  if (request.readyState == request.DONE && request.status == 200) {
    const data = JSON.parse(request.responseText);
    console.log(data);
    const title = data.data.title;
    const answers = data.data.answers;
    
    pollTitle.innerHTML = title;
    
    answers.forEach(poll => {
      pollAnswers.innerHTML +=`
        <button class="poll__answer">
          ${poll}
        </button>
      `;
    })

    const buttons = document.querySelectorAll('.poll__answer');
    buttons.forEach(btn => {
      btn.addEventListener('click', (event) => {
        alert('Спасибо, ваш голос засчитан!')
      })
    })
  }
})



