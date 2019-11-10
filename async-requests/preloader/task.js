const progressBar = document.querySelector('#loader');
const items = document.querySelector('#items')
let request = new XMLHttpRequest();

request.open('GET', 'https://netology-slow-rest.herokuapp.com/');
request.send();
request.addEventListener('readystatechange', function() {
  if (request.readyState === request.DONE && request.status === 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
    let arr =[];
    for (let value in data.response.Valute) {
      arr.push(data.response.Valute[value]);
    }
    let item = arr.map(elem => `
    <div class="item">
      <div class="item__code">
        ${elem.CharCode}
      </div>
      <div class="item__value">
        ${elem.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    </div>
    `);
    items.innerHTML = item.join('');
  }
  progressBar.classList.remove('loader_active');
})

