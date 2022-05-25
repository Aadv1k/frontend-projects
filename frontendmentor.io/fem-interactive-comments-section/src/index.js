import "./scss/main.scss";
import data from "./data.json";
import { renderContent, renderComment } from "./render.js";

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const profileImg = importAll(
  require.context("./images/avatars/", true, /\.(png|jpe?g|svg)$/)
);

let commentsList = document.getElementById("commentsList");
let commentsInput = document.getElementById("commentsInput");
commentsList.innerHTML += renderContent(data, profileImg);
commentsInput.innerHTML += renderComment(data, profileImg);

function showModal(show = true) {
  if (show) {
    document.getElementById("modalContainer").classList.add("modals--show");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  } else {
    document.getElementById("modalContainer").classList.remove("modals--show");
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }
}

function upsListener() {
  for (const elem of document.querySelectorAll(".btn--plus")) {
    let counter = elem.parentElement.querySelector("[data-counter]");
    elem.addEventListener("click", () => {
      if (counter.getAttribute("voted") === "down") {
        counter.textContent = parseInt(counter.textContent) + 2;
        counter.setAttribute("voted", "org");
      } else if (counter.getAttribute("voted") === "org") {
        counter.textContent = parseInt(counter.textContent) + 1;
        counter.setAttribute("voted", "up");
      } else if (counter.getAttribute("voted") === "up") {
        counter.textContent = parseInt(counter.textContent) - 1;
        counter.setAttribute("voted", "org");
      }
    });
  }

  for (const elem of document.querySelectorAll(".btn--minus")) {
    let counter = elem.parentElement.querySelector("[data-counter]");
    elem.addEventListener("click", () => {
      if (counter.getAttribute("voted") === "up") {
        counter.textContent = parseInt(counter.textContent) - 2;
        counter.setAttribute("voted", "org");
      } else if (counter.getAttribute("voted") === "org") {
        counter.textContent = parseInt(counter.textContent) - 1;
        counter.setAttribute("voted", "down");
      } else if (counter.getAttribute("voted") === "down") {
        counter.textContent = parseInt(counter.textContent) + 1;
        counter.setAttribute("voted", "org");
      }
    });
  }
}

function editBtnListener() {
  for (const elem of document.querySelectorAll("[data-edit]")) {
    elem.addEventListener("click", () => {
      let contentField =
        elem.parentNode.parentNode.querySelector(".card__content");
      contentField.setAttribute("contenteditable", "");
      contentField.classList.add("content--editable");

      let updateBtn = elem.parentNode.parentNode.querySelector(".card__ghost");
      let inner = contentField.innerHTML;

      updateBtn.style.display = "flex";
      updateBtn.addEventListener("click", () => {
        contentField.removeAttribute("contenteditable");
        contentField.classList.remove("content--editable");
        contentField.innerHTML = inner;
        updateBtn.style.display = "none";
      });
    });
  }
}

function deleteBtnListener() {
  for (const elem of document.querySelectorAll("[data-delete]")) {
    elem.addEventListener("click", () => {
      showModal(true);

      document.getElementById("cancelDelete").addEventListener("click", () => {
        showModal(false);
      });

      document.getElementById("confirmDelete").addEventListener("click", () => {
        elem.parentElement.parentElement.remove();
        showModal(false);
      });
    });
  }
}

function replyBtnListener() {
  for (const elem of document.querySelectorAll("[data-reply]")) {
    let target = elem.parentNode.parentElement;

    elem.addEventListener("click", () => {
      if (!elem.getAttribute("clicked")) {
        elem.setAttribute("clicked", "true");
        target.insertAdjacentHTML("afterend", renderComment(data, profileImg));
        for (let child of commentsList.children) {
          if (child.classList.contains("card--comment")) {
            child
              .querySelector(".btn--primary")
              .addEventListener("click", () => {
                let input = child.querySelector(".input").innerHTML;
                let imgPath =
                  profileImg[data.currentUser.image.png.split("/").pop()];
                let username = data.currentUser.username;

                let blob = `<div class="card card--nested">
                  <div class="card__profile">
                    <span><img src="${imgPath}" alt="🧑" for="${username}"/></span>
                    <strong class="uname-you">${username}</strong>
                    <p class="card__posted" data-postedAt>now</p>
                  </div>
                  <p class="card__content">
                    ${input}
                  </p>
                  <div class="card__counter">
                    <div class="counter">
                      <button type="button" class="btn btn--plus"></button>
                      <span data-counter voted="org">0</span>
                      <button type="button" class="btn btn--minus"></button>
                    </div>
                  </div>
                  <div class="card__btn"> 
                      <button class="btn btn--edit" data-edit>edit</button>
                      <button class="btn btn--delete" data-delete>delete</button>
                    </div>

                    <div class="card__ghost">
                      <button class="btn btn--primary" data-update>update</button>
                    </div>
                </div>`;
                target.insertAdjacentHTML("afterend", blob);
                child.remove();
                elem.removeAttribute("clicked");
                editBtnListener();
                deleteBtnListener();
                upsListener();
              });
          }
        }
      }
    });
  }
}

deleteBtnListener();
editBtnListener();
replyBtnListener();
upsListener();

// Handle the send event
for (const elem of document.querySelectorAll("[data-send]")) {
  elem.addEventListener("click", () => {
    let input =
      elem.parentNode.parentNode.querySelector("[data-input]").innerText;
    let username = elem.getAttribute("data-send");
    let imgPath = profileImg[`image-${username}.png`];

    if (input.trim().length) {
      let blob = `<div class="card">
          <div class="card__profile">
            <span><img src="${imgPath}" alt="🧑" for="${username}"/></span>
            <strong class="uname-you">${username}</strong>
            <p class="card__posted" data-postedAt>now</p>
          </div>
          <p class="card__content">
            ${input}
          </p>
          <div class="card__counter">
            <div class="counter">
              <button type="button" class="btn btn--plus"></button>
              <span data-counter voted="org">0</span>
              <button type="button" class="btn btn--minus"></button>
            </div>
          </div>
          <div class="card__btn"> 
              <button class="btn btn--edit" data-edit>edit</button>
              <button class="btn btn--delete" data-delete>delete</button>
            </div>

            <div class="card__ghost">
              <button class="btn btn--primary" data-update>update</button>
            </div>
        </div>`;

      commentsList.lastElementChild.insertAdjacentHTML("afterend", blob);

      deleteBtnListener();
      editBtnListener();
      replyBtnListener();
      upsListener();
    }

    elem.parentNode.parentNode.querySelector("[data-input]").innerText = "";
    // window.scrollTo(0, document.body.scrollHeight);
  });
}
