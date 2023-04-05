window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#menu");
  navBar.classList.toggle("bg-black", window.scrollY > 0);
  navBar.classList.toggle("opacity-90", window.scrollY > 0);
});
