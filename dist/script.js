window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#menu");
  navBar.classList.toggle("bg-black", window.scrollY > 0);
  navBar.classList.toggle("opacity-90", window.scrollY > 0);
});

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener(
  "click",
  () => {
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Search");
    input.classList.add("search-input");
    document.querySelector("#left-menu-elements").appendChild(input);
  },
  { once: true }
);
