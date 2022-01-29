let container = document.getElementsByClassName("card-container")[0];

const response = await fetch("challenges.json");
let data = await response.json();

let htmlChunk = "";
for (let i = 0; i < data.length; i++) {
  let linkChunk = "";
  let flairChunk = "";

  let title = data[i].title;
  let imgUrl = data[i].image;
  let labels = data[i].labels;
  let links = data[i].links;

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
