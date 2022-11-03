const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menus = document.querySelector(".menus");

open.addEventListener("click", () => {
  menus.classList.toggle("active");
});

close.addEventListener("click", () => {
  menus.classList.toggle("active");
});
