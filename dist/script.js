const global = {
  currentPage: window.location.pathname,
  api: {
    APIKey: "37ec4365f037f62ba3e0b8a374c29636",
    APIUrl: "https://api.themoviedb.org/3/",
  },
};

const heroPagination = document.querySelector("#hero-pagination");
const searchBtn = document.querySelector("#search-btn");

async function fetchAPIData(endpoint) {
  const APIKey = global.api.APIKey;
  const APIUrl = global.api.APIUrl;

  const response = await fetch(
    `${APIUrl}${endpoint}?api_key=${APIKey}&language=en-US`
  );
  const data = await response.json();
  return data;
}

// Hero
async function displayHeroMovie(heroMovieNumber) {
  const { results } = await fetchAPIData("movie/upcoming");
  console.log(results);
  const hero = document.querySelector("#hero");
  hero.style.backgroundImage = `url('https://image.tmdb.org/t/p/original${results[heroMovieNumber].backdrop_path}')`;
  const heroDescription = hero.querySelector("#descirption");
  // zmienic form button na linka a
  heroDescription.innerHTML = `
  <h1 id="title" class="font-bold text-5xl">${
    results[heroMovieNumber].original_title
  }</h1>
          <h2 id="category" class="font-semibold text-md">Premiere ${
            results[heroMovieNumber].release_date
          }</h2>
          <p id="information" class="w-[25vw]">
            ${results[heroMovieNumber].overview.split(".", 2).join(".")}
          </p>
          <form action="./movie-details.html" id="search-form">
          <button
            class="bg-gray-800 bg-opacity-95 rounded-full p-3 font-semibold text-lg hover:-translate-y-1 duration-500"
          >
          </form>
            <a>More Information</a>
          </button>`;
}

async function displayTopRatedMovies() {
  const { results } = await fetchAPIData("movie/popular");
  const topMovies = document.querySelector("#top-movies");
  topMovies.innerHTML = ` <div class="hover:scale-105 duration-200">
  <img src="https://image.tmdb.org/t/p/w500${results[0].poster_path}" alt="" />
  <h3 class="w-full text-white bg-black text-center">${results[0].original_title}</h3>
</div>
<div class="hover:scale-105 duration-200">
  <img src="https://image.tmdb.org/t/p/w500${results[1].poster_path}" alt="" />
  <h3 class="w-full text-white bg-black text-center">${results[1].original_title}</h3>
</div>
<div class="hover:scale-105 duration-200">
  <img src="https://image.tmdb.org/t/p/w500${results[2].poster_path}" alt="" />
  <h3 class="w-full text-white bg-black text-center">${results[2].original_title}</h3>
</div>
<div class="hover:scale-105 duration-200">
  <img src="https://image.tmdb.org/t/p/w500${results[3].poster_path}" alt="" />
  <h3 class="w-full text-white bg-black text-center">${results[3].original_title}</h3>
</div>
<div class="hover:scale-105 duration-200">
  <img src="https://image.tmdb.org/t/p/w500${results[4].poster_path}" alt="" />
  <h3 class="w-full text-white bg-black text-center">${results[4].original_title}</h3>
</div>`;
}

function setHeroImage() {
  // value - 1 to get right movie index
  const heroPageChecked =
    document.querySelector("input[name='movie']:checked").value - 1;

  displayHeroMovie(heroPageChecked);
}

function init() {
  switch (global.currentPage) {
    case "/":
    case "/dist/index.html":
      window.addEventListener("DOMContentLoaded", setHeroImage);
      heroPagination.addEventListener("click", setHeroImage);
      displayTopRatedMovies();
      break;
    case "/dist/shows.html":
      break;
    case "/dist/movie-details.html":
      break;
    case "/dist/search.html":
      break;
    case "/dist/show-details.html":
      break;
  }
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
init();
