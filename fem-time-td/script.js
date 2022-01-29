let taskList = document.getElementById("taskList")
let btns = document.getElementsByClassName("btn")

let response = await fetch('./data.json');
let data = await response.json()


function getData(data, type) {
    let htmlChunk = "";
    for (const task of data) {
        let title = task['title'];
        let metatitle = task['title'] == 'Self Care' ? 'self-care' : task['title'].toLowerCase();
        let date;

        switch (type) {
            case 'weekly':
                date = "Last Week"
                break;
            case 'monthly':
                date = "Last Month"
                break;
            default:
                date = "Yesterday"
        }

        let timeframe = task['timeframes'][type];
        let imgUrl = `./images/icon-${metatitle}.svg`

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
              <p>${date} - ${timeframe['previous']}hrs</p>
            </div>
          </div>
        </div>`
    };

    return htmlChunk;
}


taskList.innerHTML = getData(data, 'weekly')

for (const item of btns) {
    item.addEventListener("click", () => {
       taskList.innerHTML = getData(data, item.getAttribute('value'))
    })
};

/*
<div class="card work" style="background: var(--work)">
  <img class="card__accent" src="./images/icon-work.svg" alt="" />
  <div class="card__overlay">
    <div class="card__flairs">
      <h4 class="card__category">Work</h4>
      <button class="dots">
        <img src="./images/icon-ellipsis.svg" alt="..." />
      </button>
    </div>
    <div class="card__info">
      <h1>32hrs</h1>
      <p>Last Week - 36hrs</p>
    </div>
  </div>
</div>
*/
