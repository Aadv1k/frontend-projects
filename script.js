let container = document.getElementsByClassName("card-container")[0];

const response = await fetch("challenges.json");
let data = await response.json();

let htmlChunk = "";
for (let i = 0; i < data.length; i++) {
  let linkChunk = "",
    flairChunk = "";

  let title = data[i].title,
    imgUrl = data[i].image,
    labels = data[i].labels,
    links = data[i].links;

  for (const label of labels) {
    flairChunk += `
           <span class="flair">${label}</span>
        `;
  }

  for (const link in links) {
    if (links[link] !== "") {
      linkChunk += `
        <a href="${links[link]}">${link}</a>
        `;
    }
  }

  htmlChunk += `
    <div class="card">
      <div class="card__img">
        <img src="${imgUrl}" alt="" />
      </div>
      <div class="card__content">
        <h1 class="card__title">${title}</h1>
        <div class="card__labels">
            ${flairChunk}
        </div>
        <div class="card__links">
            ${linkChunk}
        </div>
      </div>
      </div>
    `;
}

container.innerHTML = htmlChunk;

let themeToggle = document.getElementById("toggle");
let icon = document.getElementById("themeIcon");
let target = document.getElementsByTagName("body")[0];

let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

target.classList.toggle(theme);

let innerIcon = theme == "dark" ? "fa-sun" : "fa-moon";
icon.classList.add(innerIcon);

themeToggle.addEventListener("click", () => {
  let currentIcon = icon.classList.contains("fa-sun") ? "fa-sun" : "fa-moon";
  let altIcon = currentIcon == "fa-sun" ? "fa-moon" : "fa-sun";

  target.classList.toggle("dark");

  icon.classList.remove(currentIcon);
  icon.classList.add(altIcon);
});
