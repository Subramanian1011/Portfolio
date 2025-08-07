window.onscroll = () => {
  document.querySelector('.header').classList.toggle('sticky', window.scrollY > 100);
};

document.getElementById('darkMode-icon').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.getElementById('darkMode-icon').classList.toggle('bx-sun');
});
