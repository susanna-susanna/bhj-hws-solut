const linkers = document.querySelectorAll(".menu_main >.menu__item >.menu__link");
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
});