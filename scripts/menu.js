(function (){
  const scrollToBottom = (scrollDuration, scrollTo) => {
  const scrollStep = -window.scrollY / (scrollDuration / 15);
  const scrollInterval = setInterval(() => {
    if (window.scrollY != scrollTo) {
        window.scrollBy( 0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }

  },15);
}

  const menuItems = document.querySelectorAll('.nav__item  .nav__item-link');
  const headers = document.querySelectorAll('.main__nav, main section h2');
  const menuIcon = document.querySelector('.icon');
  const icon = menuIcon.querySelector('i');

  _.forEach(menuItems, (node, index) => {
     if (index !== 5)
       new Elevator({
        element: node,
        targetElement: headers[index],
         verticalPadding: 100,
        duration: 2000
      })
  });

  let counter = 0;
  const showMenu = (e) => {
    e.preventDefault();
    let isHasClass;
      _.forEach(menuItems, (node) => {
        isHasClass = node.classList.toggle('show');
      });
      if (isHasClass) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-window-close');
      } else {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-window-close');
      }
  };

  menuIcon.addEventListener('click', showMenu);
}());