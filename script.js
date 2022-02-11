let data = [
  {
    "title": "Tip calculator app",
    "image": "./fem-tip-cal/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "./fem-tip-cal/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-tip-cal",
      "Challenge": ""
    }
  },

  {
    "title": "Sunnyside landing page",
    "image": "./fem-sunnyside-alp/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "./fem-sunnyside-alp/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-sunnyside-alp",
      "Challenge": ""
    }
  },

  {
    "title": "Time tracking dashboard",
    "image": "./fem-time-td/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "./fem-time-td/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-time-td",
      "Challenge": ""
    }
  },

  {
    "title": "Nft preview component",
    "image": "./fem-nft-pc/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "./fem-nft-pc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-nft-pc",
      "Challenge": ""
    }
  },

  {
    "title": "Order summary component",
    "image": "./fem-order-sc/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "./fem-order-sc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-order-sc",
      "Challenge": ""
    }
  },

  {
    "title": "Stats preview component",
    "image": "./fem-stats-pc/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "./fem-stats-pc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-stats-pc",
      "Challenge": ""
    }
  },

  {
    "title": "3 Column card component",
    "image": "./fem-3colpcc/design/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "./fem-3colpcc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-3colpcc",
      "Challenge": ""
    }
  }
]




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

let container = document.getElementsByClassName("card-container")[0];
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
        <a target="_blank "href="${links[link]}">${link}</a>
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

