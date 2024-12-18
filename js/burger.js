const burgerController = ({burger, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const burgerElem = document.querySelector(burger);
  
  burgerElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const openBurger = () => {
    burgerElem.style.visibility = 'visible';
    burgerElem.style.opacity = 1;
  };
  buttonElems.forEach(btn => {
    btn.addEventListener('click', openBurger);
  });

  const closeBurger = event => {
      const target = event.target;
      if (
        target === burgerElem ||
        (btnClose && target.closest(btnClose))
        ) {
        burgerElem.style.opacity = 0;
        setTimeout(() => {
          burgerElem.style.visibility = 'hidden';
        }, time);
        window.removeEventListener('keydown', closeBurger);
      }
    }

  burgerElem.addEventListener('click', closeBurger);
};

burgerController({
  burger: '.burger1',
  btnOpen: '.head__burger1',
  btnClose: '.burger__close',
});
