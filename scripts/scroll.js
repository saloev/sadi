(function () {
  const getAllElemets = document.querySelectorAll('.about, .portfolio, .skills, .contact, .footer');
  const getToUpButton = document.querySelector('.up_button');

  _.forEach(getAllElemets, (elem) => elem.classList.add('hidden'));

  const scrollToTop = (scrollDuration) => {
      const scrollStep = -window.scrollY / (scrollDuration / 15);
      const scrollInterval = setInterval(() => {
            if (window.scrollY != 0) {
                window.scrollBy( 0, scrollStep);
            } else {
              clearInterval(scrollInterval);
            }

          },15);

  }

  getToUpButton.addEventListener('click', (e) => {
      e.preventDefault();
      scrollToTop(2000);
    });


  window.addEventListener('scroll', (e) => {
    const getY = pageYOffset; 

    _.forEach(getAllElemets, (elem, index, nodeList) => {
      if (getY >= 700 && index === 0) {
        nodeList[index].classList.add('show');
      } else if (getY >= 1700 && index === 1) {
        nodeList[index].classList.add('show');
      } else if (getY >= 2500 && index === 2) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3000 && index === 3) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3500 && index === 4){
        nodeList[index].classList.add('show');
      }
    });

  /*to up button*/
  const loader1 = getToUpButton.querySelector('.btn__loader-1');
  const loader2 = getToUpButton.querySelector('.btn__loader-2');

  
  const heightOfPage = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                       document.documentElement.clientHeight, document.documentElement.scrollHeight, 
                       document.documentElement.offsetHeight );

  const widthLoader = 70;
  const heightLoader = 90;
  const areaLoader = widthLoader * 2 + heightLoader * 2;

  const scalingFactorFotArea = areaLoader / heightOfPage;

  getToUpButton.classList.add('hidden');

  if (getY >= 200) {
    const fillRepsent = getY * scalingFactorFotArea;

    if (fillRepsent <= 70) {
      loader1.style.width = `${fillRepsent}px`;
    } else if (fillRepsent > 70 && fillRepsent <= 145) {
      loader1.style.width = '100%';
      loader1.style.height = `${fillRepsent - 70}px`;
    } else if (fillRepsent > 140 && fillRepsent <= 210) {
      loader1.style.width = '100%';
      loader1.style.height = '100%';
      loader2.style.width = `${fillRepsent - 140}px`;
    } else if (fillRepsent > 210 && fillRepsent <= 380) {
      loader1.style.width = '100%';
      loader1.style.height = '100%';
      loader2.style.width = '100%';
      loader2.style.height = `${fillRepsent - 210}px`;
    }

    getToUpButton.classList.add('show');
  } else {
    getToUpButton.classList.remove('show');

    loader1.style.width = '0';
    loader1.style.height = '0';
    loader2.style.width = '0';
    loader2.style.height = '0';
  }
  });

}());