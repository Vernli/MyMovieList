const searchBtn = document.querySelector("#search-btn");

const global = {
  APIKey: "37ec4365f037f62ba3e0b8a374c29636",
  APIUrl: "https://api.themoviedb.org/3/",
};

async function fetchAPI(endpoint) {
  const APIKey = global.APIKey;
  const APIUrl = global.APIUrl;

  const response = fetch(
    `${APIUrl}${endpoint}?api_key=${APIKey}&language=en-US`
  );

  const data = await response.json;
  return data;
}

function displayBackgroundImage() {
  console.log(fetchAPI("movie"));
}

displayBackgroundImage();

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
