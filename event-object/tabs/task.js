const tabs = document.querySelectorAll('#tabs1 .tab');
//console.log(tabs);
const contents = document.querySelectorAll('#tabs1 .tab__content');
//console.log (contents);

tabs.forEach((elem, index, arr) => {
  //console.log(elem, index, arr);
  elem.addEventListener('click', () => {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tab_active');
      contents[i].classList.remove('tab__content_active');
    }
    //console.log(event.target);
    
    if (event.target) {
      elem.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    }
  })
}) 