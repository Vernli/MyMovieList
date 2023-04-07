const heroPagination = document.querySelector("#hero-pagination");
const searchBtn = document.querySelector("#search-btn");

const global = {
  api: {
    APIKey: "37ec4365f037f62ba3e0b8a374c29636",
    APIUrl: "https://api.themoviedb.org/3/",
  },
};

async function fetchAPIData(endpoint) {
  const APIKey = global.api.APIKey;
  const APIUrl = global.api.APIUrl;

  const response = await fetch(
    `${APIUrl}${endpoint}?api_key=${APIKey}&language=en-US`
  );
  const data = await response.json();
  return data;
}

async function displayBackgroundImage(n) {
  const { results } = await fetchAPIData("movie/popular");
  const hero = document.querySelector("#hero");
  hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${results[n].backdrop_path}')`;
  console.log(results[0].backdrop_path);
}

window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#menu");
  navBar.classList.toggle("bg-black", window.scrollY > 0);
  navBar.classList.toggle("opacity-90", window.scrolcolY > 0);
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

window.addEventListener("DOMContentLoaded", () => {
  const heroPageChecked =
    document.querySelector("input[name='movie']:checked").value - 1;
  displayBackgroundImage(heroPageChecked);
});

heroPagination.addEventListener("click", () => {
  // .value - 1 - to get right movie index
  const heroPageChecked =
    document.querySelector("input[name='movie']:checked").value - 1;
  displayBackgroundImage(heroPageChecked);
});
