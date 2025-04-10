function checkCookieConsent() {
  const cookieConsent = localStorage.getItem('cookie-consent');
  const userName = localStorage.getItem('user-name');

  if (cookieConsent === 'accepted') {
      document.getElementById('cookie-banner').style.display = 'none';
      
      if (!userName) {
          showNameAlert();
      } else {
          showWelcomeAlert(userName);
      }
  } else {
      document.getElementById('cookie-banner').style.display = 'block';
  }
}

document.getElementById('accept-btn').addEventListener('click', function () {
  localStorage.setItem('cookie-consent', 'accepted');
  document.getElementById('cookie-banner').style.display = 'none';
  showNameAlert();
});

document.getElementById('decline-btn').addEventListener('click', function () {
  document.getElementById('cookie-banner').style.display = 'none';
});

function showNameAlert() {
  document.getElementById('name-alert').style.display = 'block';
}

document.getElementById('submit-name').addEventListener('click', function () {
  const userName = document.getElementById('user-name').value;
  if (userName) {
      localStorage.setItem('user-name', userName);
      showWelcomeAlert(userName);
      document.getElementById('name-alert').style.display = 'none';
  } else {
      alert("Por favor, digite um nome.");
  }
});

function showWelcomeAlert(userName) {
  const welcomeMessage = `Bem-vindo, ${userName}!`;
  document.getElementById('welcome-message').textContent = welcomeMessage;
  document.getElementById('welcome-alert').style.display = 'block';
}

document.getElementById('close-alert').addEventListener('click', function () {
  document.getElementById('welcome-alert').style.display = 'none';
});

checkCookieConsent();

let slideIndex = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');

document.querySelector('.next').addEventListener('click', () => {
moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
moveToPrevSlide();
});

function moveToNextSlide() {
slideIndex = (slideIndex + 1) % totalSlides;
updateCarousel();
}

function moveToPrevSlide() {
slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
updateCarousel();
}

function currentSlide(index) {
slideIndex = index;
updateCarousel();
}

function updateCarousel() {
const offset = -slideIndex * 100;
slides.style.transform = `translateX(${offset}%)`;

dots.forEach((dot, i) => {
  dot.classList.toggle('active', i === slideIndex);
});
}

setInterval(() => {
moveToNextSlide();
}, 3000);

updateCarousel();
