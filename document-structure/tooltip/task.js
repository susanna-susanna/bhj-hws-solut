const links = document.querySelectorAll('.has-tooltip');
const body = document.querySelector('body');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    
    let tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.style.position = 'absolute';
    tip.style.display = 'block';
    tip.style.left = link.getBoundingClientRect().left + 'px';
    tip.style.top = (link.getBoundingClientRect().top + link.offsetHight) + 'px';
    tip.innerText = link.getAttribute('title');
    
    body.insertBefore(tip, event.target.nextElementSibling);
      
  })
})
