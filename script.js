// * selector
const burger = document.querySelector(`.burger`);
const links = document.querySelector(`nav .links`);
const link = document.querySelectorAll(`.link`);

// * addEventListener

burger.addEventListener(`click`, function () {
  links.classList.toggle(`show-links`);
  burger.classList.toggle(`burger-active`);
});
