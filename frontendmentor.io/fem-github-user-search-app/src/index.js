import "./main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const profCard = document.getElementById("profCard");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const themeToggle = document.getElementById("themeToggle");
const themeToggleIcn = document.getElementById("themeToggleIcn");
const htmlTag = document.getElementsByTagName("html")[0];

// themeToggle.addEventListener('click', () => { })

function toggleMode(mode) {
  document
    .getElementsByTagName("html")[0]
    .classList.remove(mode === "dark" ? "light" : "dark");
  document.getElementsByTagName("html")[0].classList.add(mode);
}

function setTheme() {
  if (htmlTag.classList.contains("dark")) {
    toggleMode("light");
    themeToggle.innerText = "dark";
    themeToggleIcn.classList.remove("bi-sun-fill");
    themeToggleIcn.classList.add("bi-moon-fill");
  } else {
    toggleMode("dark");
    themeToggle.innerText = "light";
    themeToggleIcn.classList.remove("bi-moon-fill");
    themeToggleIcn.classList.add("bi-sun-fill");
  }
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleMode("dark");
} else {
  toggleMode("light");
}

themeToggle.addEventListener("click", setTheme);

async function fetchData(user) {
  let rawData = await fetch(`https://api.github.com/users/${user}`);
  let data = await rawData.json();
  console.log(rawData.status);

  if ([404, 403].includes(rawData.status)) {
    return {};
  }

  return {
    username: data.login,
    name: data.name,
    avatar: data.avatar_url,
    bio: data.bio,

    twitter: data.twitter_username,
    company: data.company,
    blog: data.blog,
    location: data.location,

    repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    created: data.created_at,
  };
}

function showLoader(elem) {
  elem.innerHTML = `<div class="flex justify-center items-center">
          <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-cyan-800 dark:text-slate-100" role="status" > </div>
        </div> `;
}

searchBtn.addEventListener("click", () => {
  let rawVal = searchInput.value;
  const val = rawVal.split(" ").shift();
  showLoader(profCard);

  fetchData(val).then((data) => {
    if (!Object.keys(data).length) {
      profCard.innerHTML = ``;
      searchBtn.innerText = "Error!";
      searchBtn.classList.add("bg-red-600");
      setTimeout(() => {
        searchBtn.innerText = "Search";
        searchBtn.classList.remove("bg-red-600", "w-44");
      }, 2000);
      return;
    }

    profCard.innerHTML = `
          <div class="profile w-[90%] flex items-center gap-4 md:gap-0">
            <img
              src="${data.avatar}"
              alt="profile"
              class="w-20 rounded-full sm:w-24 md:-translate-x-4"
            />
            <div class="profile__content">
              <h2 class="${
                data.name ? "" : "disabled"
              } font-bold leading-3 text-lg text-cyan-800 dark:text-slate-100" id="itmName" >
                ${data.name ? data.name : "No name"}
              </h2>
              <small class="text-skyBlue text-base" id="itmUsername">${
                data.username
              }</small>
              <p class="text-sm mt-2 text-cyan-700 dark:text-slate-300" id="itmDate">
                ${data.created}
              </p>
            </div>
          </div>

          <p class="${
            data.bio ? "" : "disabled"
          } w-[90%] text-sm text-cyan-700 dark:text-slate-300 md:w-[80%] md:self-end" >
            ${data.bio ? data.bio : "No bio"}
          </p>

          <div class="bg-paleBlue flex justify-evenly py-4 px-4 w-[90%] font-mono rounded-lg dark:bg-darkViolet md:w-[80%] md:self-end md:justify-start md:gap-24 md:px-16 " >
            <div class="flex flex-col items-center gap-1 md:items-start">
              <span class="text-sm text-cyan-700 dark:text-slate-300">Repos</span>
              <h2 class="text-2xl font-bold pl-1 text-cyan-800 dark:text-slate-100" id="itmRepos">
                ${data.repos}
              </h2>
            </div>
            <div class="flex flex-col items-center gap-1 md:items-start">
              <span class="text-sm text-cyan-700 dark:text-slate-300">Followers</span>
              <h2 class="text-2xl font-bold pl-1 text-cyan-800 dark:text-slate-100" id="itmFollowers">
                ${data.followers}
              </h2>
            </div>
            <div class="flex flex-col items-center gap-1 md:items-start">
              <span class="text-sm text-cyan-700 dark:text-slate-300">Following</span>
              <h2 class="text-2xl font-bold pl-1 text-cyan-800 dark:text-slate-100" id="itmFollowing">
                ${data.following}
              </h2>
            </div>
          </div>

          <div class="links flex flex-col w-[90%] font-mono sm:flex-row sm:gap-20 md:w-[80%] md:self-end" >

            <div class="flex flex-col gap-1">
              <div class="${
                data.location ? "" : "link--disabled"
              } flex items-center gap-4">
                <i class="bi bi-geo-alt-fill text-2xl text-cyan-800 dark:text-slate-100" ></i>
                <p class="text-sm text-cyan-800 dark:text-slate-100" id="itmLocation" >
                  ${data.location ? data.location : "Not avaliable"}
                </p>
              </div>

              <div class="${
                data.blog ? "" : "link--disabled"
              } flex items-center gap-4">
                <i class="bi bi-link-45deg text-2xl text-cyan-800 dark:text-slate-100" ></i> 
                <a href="${
                  data.blog
                }" class="text-sm text-cyan-800 dark:text-slate-100">${
      data.blog ? data.blog : "Not avaliable"
    }</a>
              </div>
            </div>
            
            <div class="flex flex-col gap-1">
              <div class="${
                data.twitter ? "" : "link--disabled"
              } flex items-center gap-4 ">
                <i class="bi bi-twitter text-2xl text-cyan-800 dark:text-slate-100" ></i>
                <p class="text-sm text-cyan-800 dark:text-slate-100" id="itmTwitter">
                  ${data.twitter ? data.twitter : "Not avaliable"}
                </p>
              </div>

              <div class="${
                data.company ? "" : "link--disabled"
              } flex items-center gap-4">
                <i class="bi bi-building text-2xl text-cyan-800 dark:text-slate-100" ></i>
                <p class=" text-sm text-cyan-800 dark:text-slate-100">${
                  data.company ? data.company : "Not avaliable"
                }</p>
              </div>
            </div>
          </div>
          `;
  });
});
