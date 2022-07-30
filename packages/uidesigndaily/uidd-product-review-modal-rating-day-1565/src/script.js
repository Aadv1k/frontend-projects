const closeModal = document.getElementById("closeModal");
const openModal = document.getElementById("openModal");
const modal = document.getElementsByClassName("modal")[0];
const modalSubmit = document.getElementById("modalSubmit");

closeModal.addEventListener("click", () => {
  modal.classList.add("close");
  modal.classList.remove("open");
});

openModal.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.remove("close");
});

modalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("close");
  modal.classList.remove("open");
});
