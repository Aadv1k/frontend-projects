const ham = document.getElementsByClassName("hamburger")[0];
const navList = document.getElementsByClassName("nav__list")[0];

ham.addEventListener("click", () => {
  navList.classList.toggle("show");
});
