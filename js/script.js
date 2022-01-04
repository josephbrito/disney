const menu = document.querySelector('.nav-menu');
menu.addEventListener('click', ()=>{
    menu.classList.toggle('clicked');

    const buttonsClickeds = document.querySelector('.nav-buttons');
    buttonsClickeds.classList.toggle('nav-buttons-clicked');

})