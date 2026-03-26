
function updateCountdown() {
  const weddingDate = new Date('2024-10-12T15:00:00').getTime();
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = 'We are married!';
  }
}


document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


function parallax() {
  const scrolled = window.pageYOffset;
  const parallaxEls = document.querySelectorAll('.parallax');
  parallaxEls.forEach(el => {
    const rate = el.getAttribute('data-rate') || 0.5;
    const yPos = -(scrolled * rate);
    el.style.transform = `translateY(${yPos}px)`;
  });
}

window.addEventListener('scroll', parallax);


document.getElementById('rsvp-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
alert("Thank you for your RSVP! We'll confirm soon.");
  this.reset();
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});


document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});


function parallax() {
  const scrolled = window.pageYOffset;
  const parallaxEls = document.querySelectorAll('.parallax');
  parallaxEls.forEach(el => {
    const rate = el.getAttribute('data-rate') || '0.5';
    const bgImage = el.style.backgroundImage;
    if (bgImage) {
      el.style.setProperty('--scroll', scrolled * parseFloat(rate));
      el.querySelector('::before').style.transform = `translateY(${scrolled * parseFloat(rate)}px)`;
    } else {
      const yPos = -(scrolled * parseFloat(rate));
      el.style.transform = `translateY(${yPos}px)`;
    }
  });
}


updateCountdown();
setInterval(updateCountdown, 1000);
