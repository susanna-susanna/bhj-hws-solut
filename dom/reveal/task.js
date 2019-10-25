const reveals = document.querySelectorAll('.reveal');

reveals.forEach(elem => {
  window.addEventListener('scroll', () => {
    const windowtHeight = window.innerHeight;
    const size = elem.getBoundingClientRect();
    
    (size.top > 0 && size.bottom < windowtHeight) ? elem.style.opacity = "1" : elem.style.opasity = "0"
  });
})
