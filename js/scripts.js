// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
console.log('Hello World')

// Waterdrop Animation
document.addEventListener('click', function (e) {
  const waterdrop = document.createElement('div');
  waterdrop.className = 'waterdrop';
  document.body.appendChild(waterdrop);

  waterdrop.style.left = `${e.clientX}px`;
  waterdrop.style.top = `${e.clientY}px`;

  waterdrop.addEventListener('animationend', function () {
      document.body.removeChild(waterdrop);
  });
});
