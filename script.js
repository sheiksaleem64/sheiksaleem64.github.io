const themeSwitch = document.querySelector('input');

themeSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 700;
