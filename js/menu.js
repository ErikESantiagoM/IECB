/* A self-invoking function. */
(function(){
/* Selecting the elements from the DOM. */
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    /* Adding an event listener to the openButton. When the openButton is clicked, the menu will be
    shown. */
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    /* Adding an event listener to the closeMenu. When the closeMenu is clicked, the menu will be
    hidden. */
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();