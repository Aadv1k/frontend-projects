const res = await fetch('./data.json');
const data = await res.json()
let target = document.getElementById('tasks')

let listTasks = (tf, data) => {
    let htmlString = ""
    for (const task of data) {

       let timeframe = task.timeframes[tf]
       let path = `./images/icon-${task.title}`
       let className = task.title
       let previousTime = timeframe.previous
       let currentTime = timeframe.current

        htmlString += `

        <div class="${className} card">
          <img class="card__icon" src="${path}" alt="" />

          <div class="card__subcontent">
            <section>
              <h2 id="time" class="subcontent__time">${currentTime}hrs</h2>
              <h5 id="type" class="subcontent__type">${className}</h5>
            </section>
            <section>
              <small id="previousTime" class="subcontent__prev" >Last week ${previousTime}hrs</small >
              <button class="elipse">
                <img src="./images/icon-elipses.svg" alt="---" />
              </button>
            </section>
          </div>
        </div>
        `
    }
    return htmlString
}

document.getElementById('target').innerHTML = listTasks('monthly', data)

/*
        <div class="work card">
          <img class="card__icon" src="./images/icon-work.svg" alt="" />

          <div class="card__subcontent">
            <section>
              <h2 id="time" class="subcontent__time">32hrs</h2>
              <h5 id="type" class="subcontent__type">Work</h5>
            </section>
            <section>
              <small id="previousTime" class="subcontent__prev" >Last week 36hrs</small >
              <button class="elipse">
                <img src="./images/icon-ellipsis.svg" alt="---" />
              </button>
            </section>
          </div>
        </div>
*/
