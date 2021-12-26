const mobileMenuBtnWrapper = document.querySelector('[data-mobile-menu-btn]');
const mobileMenuBtnEle = document.querySelector('.mobile-menu-btn--burger');
const mobileNavbarList = document.querySelector('.mobile-navbar-list');

let isMobileMenuOpen = false;

mobileMenuBtnWrapper.addEventListener('click', () => {
  if (!isMobileMenuOpen) {
    isMobileMenuOpen = true;
    mobileMenuBtnEle.classList.add('mobile-menu-btn--burger__open');
    mobileNavbarList.classList.add('mobile-navbar-list__open');
  } else {
    isMobileMenuOpen = false;
    mobileMenuBtnEle.classList.remove('mobile-menu-btn--burger__open');
    mobileNavbarList.classList.remove('mobile-navbar-list__open');
  }

});

window.addEventListener('resize', () => {
  const clientWidth = document.documentElement.clientWidth;
  if (isMobileMenuOpen && clientWidth > 991) {
    mobileNavbarList.classList.remove('mobile-navbar-list__open');
  } else if (isMobileMenuOpen && clientWidth < 991) {
    mobileNavbarList.classList.add('mobile-navbar-list__open');
  }
});
