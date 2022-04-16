const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// open navigation bar
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

// close navigation bar
if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}