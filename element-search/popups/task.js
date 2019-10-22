let modalMain = document.getElementById("modal_main");
//console.log(modalMain);
//console.log(modalMain.classList);
let modalSuccess = document.getElementById("modal_success");
let modalClose = document.querySelectorAll(".modal__close");
//console.log(modalClose.classList);
//console.log(modalClose);
let showSuccess = document.querySelector(".show-success");
//console.log(showSuccess.classList);

modalClose.forEach(item => item.onclick = () => item.closest(".modal").classList.remove("modal_active"));

showSuccess.onclick = () => {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
    return;
} 

modalMain.classList.add("modal_active");
