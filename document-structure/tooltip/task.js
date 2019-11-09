const links = document.querySelectorAll('.has-tooltip');

links.forEach(link => {
  link.addEventListener('click', () => {
    event.preventDefault();
        
    const target = event.target;
    const position = target.getBoundingClientRect();
    const showTip = document.querySelector('.tooltip_active');
    
    if (target.classList.contains('has-tooltip')) {
      if (target.children.length) {
        if (showTip) {
          showTip.remove();
        }
      } else {
        if (showTip) {
          showTip.remove();
        }
        target.insertAdjacentHTML('beforeend',
        `<div class="tooltip tooltip_active"
          style="left: ${position.left + 'px'};
          top: ${position.bottom + 'px'}">
            ${target.getAttribute('title')}
        </div>`)
      }
    }
  })
})
