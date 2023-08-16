function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
var typingEffect = new Typed(".multitext", {
  strings: ["Coder", "Designer", "Editor"],
  loop: true,
  typeSpeed: 240,
  backSpeed: 160,
  backDelay: 1500,
});
