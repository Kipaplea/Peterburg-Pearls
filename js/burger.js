const burgerController = ({burger, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const burgerElem = document.querySelector(burger);

    burgerElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;

    const closeburger = event => {
      const target = event.target;

      if (
        target === burgerElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {

        burgerElem.style.opacity = 0;

        setTimeout(() => {
          burgerElem.style.visibility = 'hidden';
        }, time);

        window.removeEventListener('keydown', closeburger);
      }
    }

    const openburger = () => {
      burgerElem.style.visibility = 'visible';
      burgerElem.style.opacity = 1;
      window.addEventListener('keydown', closeburger)
    };

    buttonElems.forEach(btn => {
      btn.addEventListener('click', openburger);
    });

    burgerElem.addEventListener('click', closeburger);
  };

  burgerController({
    burger: '.burger1',
    btnOpen: '.head__burger1',
    btnClose: '.burger__close',
  });

  burgerController({
    burger: '.burger2',
    btnOpen: '.head__burger2',
    btnClose: '.burger__close'
  });
