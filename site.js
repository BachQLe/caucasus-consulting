const siteHeader = document.querySelector('header');

function updateHeader() {
  siteHeader.classList.toggle('is-scrolled', window.scrollY > 12);
}

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });
