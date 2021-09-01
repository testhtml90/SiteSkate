const buttonBlackMode = document.querySelector('.bouton-blackMode');
const body = document.querySelector('body');
const h2 = document.querySelector('h2');
const linkInstagram = document.querySelector('.header-h2__instagram');


buttonBlackMode.addEventListener("click", function(){
    console.log('click');
    body.classList.toggle('body-black-mode');
    h2.classList.toggle('h2-blackMode');
    linkInstagram.classList.toggle('h2__instagram-blackMode');
})