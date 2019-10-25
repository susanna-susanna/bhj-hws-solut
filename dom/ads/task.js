const rotators = Array.from(document.getElementsByClassName('rotator'));

function next() {
let rotCase = Array.from(document.getElementsByClassName('rotator__case'));
let active = document.querySelector('.rotator__case_active');
let i = rotCase.indexOf(active);
let interval = rotCase[i].dataset.speed;
    

    function rotate() {
      rotCase[i].classList.remove('rotator__case_active');
      i++;
      if (i === rotCase.length) i = 0;
      rotCase[i].classList.add('rotator__case_active');
        
      setTimeout(rotate, interval); 
    }

    setTimeout(rotate, interval); 
  }

  rotators.forEach(elem => {
    next(elem)
  });

  
