const buttonSearch = document.querySelector("#home-page main a");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#modal header a");

buttonSearch.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
