import "./main.css";
import data from "./data.json";

const chart = document.getElementById("chart");

function normalize(amount, total) {
  return (amount / 100) * total;
}

const barHeight = 200;

const max = Math.max(...data.map((e) => e.amount));

for (const elem of data) {
  const normalizedHeight = `${normalize(elem.amount, barHeight)}px`;

  const bar = document.createElement("div");
  bar.classList.add("text-center", "w-[14%]", "relative");
  const htm = ` 
  <div style="height: ${normalizedHeight};" class="w-full ${
    elem.amount === max ? "bg-gray-400" : "bg-tomato"
  } rounded-sm transition-[opacity] hover:opacity-70 hover:cursor-pointer"> </div> 
  <span class="absolute w-fit p-1.5 left-1/2 -translate-x-1/2 transition-opacity opacity-0 -top-8 hidden bg-stone-800 text-white font-bold text-xs rounded-sm">$${
    elem.amount
  }</span>
  <p class="opacity-50 text-sm mt-2.5">${elem.day}</p>
`;

  bar.insertAdjacentHTML("beforeend", htm);
  chart.appendChild(bar);
}

for (const bar of chart.children) {
  bar.addEventListener("mouseover", () => {
    bar.getElementsByTagName("span")[0].classList.remove("hidden");
    bar.getElementsByTagName("span")[0].classList.add("opacity-100");
  });

  bar.addEventListener("mouseout", () => {
    bar.getElementsByTagName("span")[0].classList.add("hidden");
  });
}
