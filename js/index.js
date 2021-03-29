const navSlide = () => {
const menuBtn = document.querySelector('.hamburger');
const nav = document.querySelector('#navigation');
let menuOpen = false;
    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            nav.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            nav.classList.remove('open');
            menuOpen = false;
        }
    });
}

navSlide();
   

