let ham = document.getElementsByClassName("ham")[0];
let navList = document.getElementsByClassName("nav__list")[0];

document.getElementsByClassName("close__icon")[0].classList.add("none");

ham.addEventListener("click", () => {
  if (navList.getAttribute("toggled") == "false") {
    navList.classList.add("open");
    document.getElementsByClassName("ham__icon")[0].classList.add("none");
    document.getElementsByClassName("close__icon")[0].classList.remove("none");
    navList.setAttribute("toggled", "true");
  } else {
    navList.classList.remove("open");
    document.getElementsByClassName("ham__icon")[0].classList.remove("none");
    document.getElementsByClassName("close__icon")[0].classList.add("none");
    navList.setAttribute("toggled", "false");
  }
});
