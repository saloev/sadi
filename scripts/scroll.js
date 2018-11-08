(function () {
  const getAllElemets = document.querySelectorAll('.about, .portfolio, .skills, .contact, .footer');
  const getToUpButton = document.querySelector('.up_button');

  /*menu wrapper*/
  const menuWrapper = document.querySelector('.main__nav__wrapper');

  _.forEach(getAllElemets, (elem) => elem.classList.add('hidden'));

   new Elevator({
    element: document.querySelector('.up_button'),
    duration: 2000
    });

  window.addEventListener('scroll', (e) => {
    const getY = pageYOffset; 

    _.forEach(getAllElemets, (elem, index, nodeList) => {
      if (getY >= 700 && index === 0) {
        nodeList[index].classList.add('show');
      } else if (getY >= 1500 && index === 1) {
        nodeList[index].classList.add('show');
      } else if (getY >= 2300 && index === 2) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3000 && index === 3) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3200 && index === 4){
        nodeList[index].classList.add('show');
      }
    });

  if (getY > 900) {
    menuWrapper.classList.add('hide__menu');
  } else {
    menuWrapper.classList.remove('hide__menu');
  }

  });
}());
