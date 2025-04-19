function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

document.addEventListener('click', (event) => {
  const navLinks = document.querySelector('.nav-links');
  const menuToggle = document.querySelector('.menu-toggle');
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('active');
  }
});