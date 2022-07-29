import style from "./scss/main.scss"; // eslint-disable-line

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  setTimeout(() => {
    document.getElementsByTagName("body")[0].classList.toggle("light");
  }, 250);
});
