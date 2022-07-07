const body = document.querySelector('body');

window.onload = function () {
  var docsHead = document.querySelector('#docs_header').clientHeight;
  body.setAttribute('style', `--heightHack: ${docsHead}px`);
};

window.onresize = function () {
  var docsHead = document.querySelector('#docs_header').clientHeight;
  body.setAttribute('style', `--heightHack: ${docsHead}px`);
};

// Listeners

function testDark() {
  var hydrogen = document.querySelectorAll('[data-h2]');
  if (
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
      (localStorage.theme === undefined || localStorage.theme != 'light')) ||
    (localStorage.theme != undefined && localStorage.theme === 'dark')
  ) {
    hydrogen.forEach(function (item) {
      item.dataset.h2 = 'dark';
    });
  } else {
    hydrogen.forEach(function (item) {
      item.dataset.h2 = '';
    });
  }
}
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => e.matches && testDark());
window
  .matchMedia('(prefers-color-scheme: light)')
  .addEventListener('change', (e) => e.matches && testDark());

// Storage check

if (localStorage.theme != undefined) {
  if (localStorage.theme === 'dark') {
    var hydrogen = document.querySelectorAll('[data-h2]');
    var switcher = document.querySelector('#switcher');
    switcher.classList.remove('light');
    switcher.classList.add('dark');
    switcher.classList.remove('pref');
    hydrogen.forEach(function (item) {
      item.dataset.h2 = 'dark';
    });
  } else if (localStorage.theme === 'light') {
    var hydrogen = document.querySelectorAll('[data-h2]');
    var switcher = document.querySelector('#switcher');
    switcher.classList.add('light');
    switcher.classList.remove('dark');
    switcher.classList.remove('pref');
    hydrogen.forEach(function (item) {
      item.dataset.h2 = '';
    });
  }
} else if (
  localStorage.theme == undefined &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  var hydrogen = document.querySelectorAll('[data-h2]');
  var switcher = document.querySelector('#switcher');
  switcher.classList.remove('light');
  switcher.classList.remove('dark');
  switcher.classList.remove('pref');
  hydrogen.forEach(function (item) {
    item.dataset.h2 = 'dark';
  });
}

// Toggles

function enablePref() {
  var hydrogen = document.querySelectorAll('[data-h2]');
  var switcher = document.querySelector('#switcher');
  switcher.classList.remove('light');
  switcher.classList.remove('dark');
  switcher.classList.add('pref');
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    hydrogen.forEach(function (item) {
      item.dataset.h2 = 'dark';
    });
  } else {
    hydrogen.forEach(function (item) {
      item.dataset.h2 = '';
    });
  }
  localStorage.removeItem('theme');
}

function enableLight() {
  var hydrogen = document.querySelectorAll('[data-h2]');
  var switcher = document.querySelector('#switcher');
  switcher.classList.add('light');
  switcher.classList.remove('dark');
  switcher.classList.remove('pref');
  hydrogen.forEach(function (item) {
    item.dataset.h2 = '';
  });
  localStorage.theme = 'light';
}

function enableDark() {
  var hydrogen = document.querySelectorAll('[data-h2]');
  var switcher = document.querySelector('#switcher');
  switcher.classList.remove('light');
  switcher.classList.add('dark');
  switcher.classList.remove('pref');
  hydrogen.forEach(function (item) {
    item.dataset.h2 = 'dark';
  });
  localStorage.theme = 'dark';
}
