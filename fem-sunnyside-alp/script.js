let ham = document.getElementsByClassName("hamburger")[0];
let navList = document.getElementsByClassName("nav__list")[0];

ham.addEventListener("click", () => {
  document.getElementsByClassName("nav__list")[0].classList.toggle("show");
});
