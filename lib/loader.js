"use strict";

(function () {
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.querySelector(".loader").classList.add("end__loader");
    }, 1000);
  });
})();