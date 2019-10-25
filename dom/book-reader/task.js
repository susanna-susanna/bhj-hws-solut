const book = document.querySelector('#book');
const booksClass = book.classList;
const controlFontSize = document.querySelector('.book__control_font-size'); 

controlFontSize.addEventListener('click', function(event) {
  let fsActive = document.querySelector('.font-size_active');
  fsActive.classList.remove('font-size_active');
  let need = event.target;
  need.classList.add('font-size_active');
  //const book = event.target.closest('#book');
   
  if (need.dataset.size == 'small') {
    if (booksClass.contains('book_fs-big')) {
      booksClass.remove('book_fs-big');
    }
    booksClass.add('book_fs-small'); 
  } else if (need.dataset.size == 'big') {
    if (booksClass.contains('book_fs-small')) {
      booksClass.remove('book_fs-small');
    }
    booksClass.add('book_fs-big');
  } else {
    if (booksClass.contains('book_fs-small')) booksClass.remove('book_fs-small');
    if (booksClass.contains('book_fs-big')) booksClass.remove('book_fs-big');
  }
  
  event.preventDefault();
});

const controlColor = document.querySelector('.book__control_color');

controlColor.addEventListener('click', function(event) {
  let colorActive = controlColor.querySelector('.color_active');
  colorActive.classList.remove('color_active');
  let need = event.target;
  need.classList.add('color_active');

  if (need.dataset.color == 'gray') {
    if (booksClass.contains('book_color-whitesmoke')) {
      booksClass.remove('book_color-whitesmoke');
    }
    booksClass.add('book_color-gray')
  } else if (need.dataset.color == 'whitesmoke') {
    if (booksClass.contains('book_color-gray')) {
      booksClass.remove('book_color-gray')
    }
    booksClass.add('book_color-whitesmoke');
  } else {
    if (booksClass.contains('book_color-gray')) booksClass.remove('book_color-gray');
    if (booksClass.contains('book_color-whitesmoke')) booksClass.remove('book_color-whitesmoke');
  }

  event.preventDefault();
})

const controlBG = document.querySelector('.book__control_background');

controlBG.addEventListener('click', function(event) {
  let colorActive = controlBG.querySelector('.color_active');
  colorActive.classList.remove('color_active');
  let need = event.target;
  need.classList.add('color_active');

  if (need.dataset.color =='black') {
    if(booksClass.contains('color_gray')) {
      booksClass.remove('color_gray');
    }
    booksClass.add('color_black');
  } else if (need.dataset.color == 'gray') {
    if (booksClass.contains('color_black')) {
      booksClass.remove('color_black');
    }
    booksClass.add('color_gray');
  } else {
    if (booksClass.contains('color_black')) booksClass.remove('color_black');
    if (booksClass.contains('color_gray')) booksClass.remove('color_gray');
  }

  event.preventDefault();
})


