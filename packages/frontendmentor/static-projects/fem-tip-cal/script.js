const billInput = document.getElementsByClassName("bill__input")[0];
const peopleInput = document.getElementsByClassName("people__input")[0];
const customTip = document.getElementsByClassName("btns__custom")[0];
const reset = document.getElementsByClassName("calc__reset")[0];

const tipBtns = document.querySelectorAll(".tip__btns button");

function setValue(bill, tip, people) {
  const tipAmount = (tip * bill) / 100 / people;
  const splitBill = (parseInt(bill) + parseInt(tip)) / people;

  document.querySelectorAll(
    ".result__value"
  )[0].innerText = `$${tipAmount.toFixed(2)}`;
  document.querySelectorAll(
    ".result__value"
  )[1].innerText = `$${splitBill.toFixed(2)}`;
}

// Defaults
let bill = 142.55;
let tip = 15;
let people = 5;
setValue(bill, tip, people);
document.querySelector('[value="15"]').classList.add("tip__btn--active");

function resetAll() {
  bill = 142.55;
  tip = 15;
  people = 5;

  peopleInput.value = "";
  customTip.value = "";
  billInput.value = "";

  setValue(bill, tip, people);
  document.querySelector('[value="15"]').classList.add("tip__btn--active");
}

tipBtns.forEach((item) => {
  item.addEventListener("click", () => {
    tipBtns.forEach((subitem) => {
      if (subitem.classList.contains("tip__btn--active")) {
        subitem.classList.remove("tip__btn--active");
      }
    });
    item.classList.toggle("tip__btn--active");
    tip = item.getAttribute("value");

    setValue(bill, tip, people);
  });
});

billInput.addEventListener("input", () => {
  if (parseFloat(billInput.value)) {
    bill = parseFloat(billInput.value);
    setValue(bill, tip, people);
  }
});

customTip.addEventListener("input", () => {
  if (parseFloat(customTip.value)) {
    tip = parseFloat(customTip.value);
    setValue(bill, tip, people);
  }
});

peopleInput.addEventListener("keyup", () => {
  if (parseInt(peopleInput.value) === 0) {
    document
      .querySelector(".people__warning")
      .classList.add("people__warning--display");
  } else if (parseInt(peopleInput.value)) {
    document
      .querySelector(".people__warning")
      .classList.remove("people__warning--display");
    people = parseFloat(peopleInput.value);
    setValue(bill, tip, people);
  }
});

reset.addEventListener("click", resetAll);
