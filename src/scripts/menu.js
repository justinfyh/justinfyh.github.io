document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('.logo').classList.toggle('hidden');
    document.querySelector('.hamburger').classList.toggle('expanded');
  });