const rotators = Array.from(document.getElementsByClassName('rotator'));

const next = (rotator) => {
let rotCase = Array.from(rotator.getElementsByClassName('rotator__case'));
let active = rotator.querySelector('.rotator__case_active');
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

  rotators.forEach(rotator => {
    next(rotator);
  });

  
