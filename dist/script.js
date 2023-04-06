const searchBtn = document.querySelector("#search-btn");

window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#menu");
  navBar.classList.toggle("bg-black", window.scrollY > 0);
  navBar.classList.toggle("opacity-90", window.scrollY > 0);
});

searchBtn.addEventListener(
  "click",
  () => {
    const input = document.createElement("input");
    input.setAttribute("name", "search");
    input.setAttribute("id", "search");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Search");
    input.classList.add("search-input");

    document.querySelector("#search-form").appendChild(input);
  },
  { once: true }
);
