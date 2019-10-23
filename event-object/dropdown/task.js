/*const linkers = document.querySelectorAll(".menu_main >.menu__item >.menu__link");
console.log(linkers);

linkers.forEach(elem => {
  elem.onclick = () => {
    const menuActive = document.querySelectorAll(".menu_main > .menu__item > .menu_active");
    if (elem.closest(".menu__item").querySelector(".menu_sub")) {
      elem.closest(".menu__item").querySelector(".menu_sub").classList.add("menu_active");

      if (menuActive.length) {
        menuActive[0].classList.remove("menu_active");
      }
      return false;
    }  
  }
});*/

const linkers = document.querySelectorAll('.dropdown__link');
const value = document.querySelector('.dropdown__value');

value.addEventListener('click', () => {
  value.closest('.dropdown').querySelector('.dropdown__list').classList.add('dropdown__list_active');
});

linkers.forEach((elem) => {
  //console.log(elem.textContent);
  elem.addEventListener('click', (event) => {
    elem.closest('.dropdown').querySelector('.dropdown__value').textContent = elem.textContent;
    elem.closest('.dropdown__list').classList.remove('dropdown__list_active');
    event.preventDefault();
  });
});