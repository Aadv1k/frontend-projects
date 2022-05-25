let data = [
  {
    "title": "Loopstudios landing page",
    "image": "frontendmentor.io/fem-loopstudios-page/design/desktop-preview.jpg",
    "labels": ["Html", "SCSS", "JavaScript", "Webpack", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-loopstudios-page/dist/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-loopstudios-page",
      "Challenge": ""
    }
  },


  {
    "title": "Social Media Dashboard",
    "image": "frontendmentor.io/fem-social-dashboard/design/desktop-preview.jpg",
    "labels": ["Html", "SCSS", "JavaScript", "Webpack", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-social-dashboard/dist/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-social-dashboard",
      "Challenge": ""
    }
  },

  {
    "title": "Huddle landing page",
    "image": "frontendmentor.io/fem-huddle-landing-page/design/desktop-preview.jpg",
    "labels": ["Html", "Scss", "webpack", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-huddle-landing-page/dist/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-huddle-landing-page",
      "Challenge": ""
    }
  },

  {
    "title": "Testimonials grid section",
    "image": "frontendmentor.io/fem-testemonials-grid/design/desktop-preview.jpg",
    "labels": ["Html", "SCSS", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-testemonials-grid/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-testemonials-grid",
      "Challenge": ""
    }
  },

  {
    "title": "Interactive pricing component",
    "image": "frontendmentor.io/fem-interactive-pc/design/desktop-preview.jpg",
    "labels": ["Html", "SCSS", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-interactive-pc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-interactive-pc",
      "Challenge": ""
    }
  },

  {
    "title": "Crowdfunding project page",
    "image": "frontendmentor.io/fem-crowdfunding-pp/design/desktop-preview.jpg",
    "labels": ["Html", "Scss", "JavaScript", "Gulp", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/fem-crowdfunding-pp/dist/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-crowdfunding-pp",
      "Challenge": ""
    }
  },

  {
    "title": "Advice generator app",
    "image": "frontendmentor.io/static-projects/fem-advice-app/desktop-preview.jpg",
    "labels": ["Html", "JavaScript", "CSS", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-advice-app/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-advice-app",
      "Challenge": ""
    }
  },


  {
    "title": "Tip calculator app",
    "image": "frontendmentor.io/static-projects/fem-tip-cal/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-tip-cal/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-tip-cal",
      "Challenge": ""
    }
  },

  {
    "title": "Sunnyside landing page",
    "image": "frontendmentor.io/static-projects/fem-sunnyside-alp/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-sunnyside-alp/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-sunnyside-alp",
      "Challenge": ""
    }
  },

  {
    "title": "Time tracking dashboard",
    "image": "frontendmentor.io/static-projects/fem-time-td/desktop-preview.jpg",
    "labels": ["Html", "CSS", "JavaScript", "Junior"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-time-td/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-time-td",
      "Challenge": ""
    }
  },

  {
    "title": "Nft preview component",
    "image": "frontendmentor.io/static-projects/fem-nft-pc/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-nft-pc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-nft-pc",
      "Challenge": ""
    }
  },

  {
    "title": "Order summary component",
    "image": "frontendmentor.io/static-projects/fem-order-sc/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-order-sc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-order-sc",
      "Challenge": ""
    }
  },

  {
    "title": "Stats preview component",
    "image": "frontendmentor.io/static-projects/fem-stats-pc/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-stats-pc/index.html",
      "GitHub": "https://github.com/Aadv1k/frontend-projects/tree/main/fem-stats-pc",
      "Challenge": ""
    }
  },

  {
    "title": "3 Column card component",
    "image": "frontendmentor.io/static-projects/fem-3colpcc/desktop-preview.jpg",
    "labels": ["Html", "CSS", "Newbie"],
    "links": {
      "Live url": "frontendmentor.io/static-projects/fem-3colpcc/index.html",
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

