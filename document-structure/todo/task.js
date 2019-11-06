const input = document.querySelector('#task__input');
const button = document.querySelector('#tasks__add');
const taskList = document.querySelector('#tasks__list');

function addTask() {
  let task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `
    <div class="task__title">
      ${input.value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;

  taskList.appendChild(task);
  input.value = '';

  let closeTask = task.querySelector('.task__remove');
  closeTask.addEventListener('click', () => {
    task.remove();
  })
}

button.addEventListener('click', event => {
  event.preventDefault();
  addTask();
});

input.addEventListener('keypress', (event) => {
  if (event.key.toLowerCase() === 'enter') {
    event.preventDefault();
    addTask();
  }
})
