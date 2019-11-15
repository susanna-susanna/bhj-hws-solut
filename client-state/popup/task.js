const pop = document.getElementById('subscribe-modal');
const close = document.querySelector('.modal__close_times');

const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parths = value.split("; " + name + "=");

    if (parths.length === 2) {
        return parths
        .pop()
        .split(";")
        .shift()
    }
}

window.addEventListener('load', () => {
    if (getCookie('modalActive')) {
        return false;
    } else {
        pop.classList.add('modal_active');
    }
})

close.addEventListener('click', () => {
    pop.classList.remove('modal_active');
    if (getCookie('modalActive')) {
        return false;
    } else {
        document.cookie = "modalActive=true; path=/; max-age=3600"
    }
})

