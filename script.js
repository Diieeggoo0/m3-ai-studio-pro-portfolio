document.addEventListener('DOMContentLoaded', () => {
  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const theme = btn.getAttribute('data-color');
      document.body.setAttribute('data-theme', theme);
    });
  });
});