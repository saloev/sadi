"use strict";

(function () {
  var getAllElemets = document.querySelectorAll('.about, .portfolio, .skills, .contact, .footer');
  var getToUpButton = document.querySelector('.up_button');

  _.forEach(getAllElemets, function (elem) {
    return elem.classList.add('hidden');
  });

  var scrollToTop = function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function () {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  getToUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTop(2000);
  });
  window.addEventListener('scroll', function (e) {
    var getY = pageYOffset;

    _.forEach(getAllElemets, function (elem, index, nodeList) {
      if (getY >= 700 && index === 0) {
        nodeList[index].classList.add('show');
      } else if (getY >= 1700 && index === 1) {
        nodeList[index].classList.add('show');
      } else if (getY >= 2500 && index === 2) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3000 && index === 3) {
        nodeList[index].classList.add('show');
      } else if (getY >= 3500 && index === 4) {
        nodeList[index].classList.add('show');
      }
    });
    /*to up button*/


    var loader1 = getToUpButton.querySelector('.btn__loader-1');
    var loader2 = getToUpButton.querySelector('.btn__loader-2');
    var heightOfPage = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var widthLoader = 70;
    var heightLoader = 90;
    var areaLoader = widthLoader * 2 + heightLoader * 2;
    var scalingFactorFotArea = areaLoader / heightOfPage;
    getToUpButton.classList.add('hidden');

    if (getY >= 200) {
      var fillRepsent = getY * scalingFactorFotArea;

      if (fillRepsent <= 70) {
        loader1.style.width = "".concat(fillRepsent, "px");
      } else if (fillRepsent > 70 && fillRepsent <= 145) {
        loader1.style.width = '100%';
        loader1.style.height = "".concat(fillRepsent - 70, "px");
      } else if (fillRepsent > 140 && fillRepsent <= 210) {
        loader1.style.width = '100%';
        loader1.style.height = '100%';
        loader2.style.width = "".concat(fillRepsent - 140, "px");
      } else if (fillRepsent > 210 && fillRepsent <= 380) {
        loader1.style.width = '100%';
        loader1.style.height = '100%';
        loader2.style.width = '100%';
        loader2.style.height = "".concat(fillRepsent - 210, "px");
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
})();