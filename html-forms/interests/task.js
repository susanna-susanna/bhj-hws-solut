const check1 = document.querySelectorAll('.interests_main>ul>.interest');

check1.forEach(elem => {
  elem.addEventListener('change', event => {
    const input = event.target;
   
    if (input.checked){
      const subIn = input.closest('.interest').querySelectorAll('input');
      subIn.forEach(element => {
        element.checked = true;
      })
    } else {
      const subIn = input.closest('.interest').querySelectorAll('input');
      subIn.forEach(element => {
        element.checked = false;
      })
    }
  });
});
