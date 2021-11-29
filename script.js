function ativaNoScroll() {
  document.querySelectorAll('img').forEach((img, src) => {
    if(getBoundingClienteRect().top < window.innerHeight) {
      img.src = getAttribute('data-src');
    };
  })
}
window.addEventListener('scroll', ativaNoScroll);