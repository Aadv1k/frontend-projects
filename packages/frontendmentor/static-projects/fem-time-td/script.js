const taskList = document.getElementById("taskList");
const btns = document.getElementsByClassName("btn");

const response = fetch("./data.json");

function getData(data, type) {
  let htmlChunk = "";
  for (const task of data) {
    const { title } = task;
    const metatitle =
      task.title === "Self Care" ? "self-care" : task.title.toLowerCase();
    let date;

    switch (type) {
      case "weekly":
        date = "Last Week";
        break;
      case "monthly":
        date = "Last Month";
        break;
      default:
        date = "Yesterday";
    }

    const timeframe = task.timeframes[type];
    const imgUrl = `./images/icon-${metatitle}.svg`;

    htmlChunk += `<div class="card" style="background: var(--${metatitle})">
          <img class="card__accent" src="${imgUrl}" alt="" />
          <div class="card__overlay">
            <div class="card__flairs">
              <h4 class="card__category">${title}</h4>
              <button class="dots">
                <img src="./images/icon-ellipsis.svg" alt="..." />
              </button>
            </div>
            <div class="card__info">
              <h1>${timeframe.current}hrs</h1>
              <p>${date} - ${timeframe.previous}hrs</p>
            </div>
          </div>
        </div>`;
  }

  return htmlChunk;
}

response.then((data) => {
  taskList.innerHTML = getData(data, "weekly");
  for (const item of btns) {
    item.addEventListener("click", () => {
      taskList.innerHTML = getData(data, item.getAttribute("value"));
    });
  }
});
