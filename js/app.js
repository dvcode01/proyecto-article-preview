// Variables y selectores | Selectors
const buttonShare = document.querySelector('.card__button');

// eventos o events
eventListener();
function eventListener(){
    buttonShare.addEventListener('click', showToolTip);
}

// funciones o functions
function showToolTip(){
    const socialElement = document.querySelector('.card__social');
    socialElement.classList.toggle('show');
}