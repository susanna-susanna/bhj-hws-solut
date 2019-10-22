const slides = document.querySelectorAll('.slider__item');
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
let arr = Array.from(document.getElementsByClassName('slider__item')); 
//console.log(Array.isArray(arr));
let i;

function goNext() {
  let active = document.querySelector('.slider__item_active');
  i = arr.indexOf(active);
  slides.item(i).classList.remove('slider__item_active');
  dots[i].classList.remove('slider__dot_active');  
  i++;  
  //console.log(i); 
  if (i === slides.length) i = 0;
  slides.item(i).classList.add('slider__item_active');
  
  dots[i].classList.add('slider__dot_active');
}

function goPrev() {
  let active = document.querySelector('.slider__item_active');
  i = arr.indexOf(active);
  dots[i].classList.remove('slider__dot_active');
  slides.item(i).classList.remove('slider__item_active');
  i--;
  
  if (i < 0) i = slides.length - 1;
  slides.item(i).classList.add('slider__item_active');
  
  dots[i].classList.add('slider__dot_active');
}

const dotsCont = document.querySelector('.slider__dots');
const dots = document.querySelectorAll('.slider__dot');
let active = document.querySelector('.slider__dot_active');

dots.forEach((elem, index, arr) => {
  console.log({elem, index, arr});
    elem.addEventListener('click', () => {
        for (let i = 0; i < dots.length; i++) {
           dots[i].classList.remove('slider__dot_active');
           slides.item(i).classList.remove('slider__item_active');
        console.log(i);
        }
        //console.log(event.target);
        //console.log(event, index);
        
        if (event.target) {
            elem.classList.add('slider__dot_active');
            let i = index;
            slides.item(i).classList.add('slider__item_active');
        } 
  })
})

prev.onclick = goPrev;
next.onclick = goNext;








