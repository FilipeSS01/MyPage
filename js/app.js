particlesJS.load('particles-js', 'particles.json');
window.addEventListener("scroll", () => {
  const navBar = document.querySelector("#menu");
  if (window.scrollY > 0) {
    navBar.classList.add("isScrolling");
  } else {
    navBar.classList.remove("isScrolling");
  }
});
