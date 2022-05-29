import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const hamBtn = document.getElementById("hamBtn");
const closeBtn = document.getElementById("closeBtn");
const navMbl = document.getElementById("navMbl");

const tooltipBtn = document.getElementsByClassName("dropdown__btn");

hamBtn.addEventListener("click", () => {
  navMbl.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  navMbl.classList.add("translate-x-full");
});

for (let btn of tooltipBtn) {
  let tooltip = btn.parentElement.getElementsByClassName("dropdown__list")[0];
  let icon = btn.getElementsByClassName("btn__icon")[0];

  btn.addEventListener("click", () => {
    if (btn.getAttribute("data-open") === null) {
      icon.classList.add("rotate-180");
      tooltip.classList.remove("hidden");
      tooltip.classList.add("flex");
      btn.setAttribute("data-open", "");
    } else {
      icon.classList.remove("rotate-180");
      tooltip.classList.remove("flex");
      tooltip.classList.add("hidden");
      btn.removeAttribute("data-open");
    }

    for (let nBtn of tooltipBtn) {
      if (!btn === nBtn) {
        nBtn.removeAttribute("data-open");
      }
    }
  });
}
