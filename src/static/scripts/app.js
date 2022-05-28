function toggleMode(element) {
  if (document.querySelector('body').classList.contains('h2-dark')){
    element.classList.remove('active');
    document.querySelector('body').classList.remove('h2-dark');
    document.querySelector('body').classList.add('h2-light');
    localStorage.setItem("color-mode", "light");
  } else {
    element.classList.add('active');
    document.querySelector('body').classList.add('h2-dark');
    document.querySelector('body').classList.remove('h2-light');
    localStorage.setItem("color-mode", "dark");
  }
}

window.onload = function() {
  if (localStorage.getItem('color-mode') === 'dark' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('color-mode'))) {
    document.querySelector('.mode-toggle').classList.add('active');
    document.querySelector('body').classList.add('h2-dark');
  }
}