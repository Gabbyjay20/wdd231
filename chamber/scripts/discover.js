import places from '../data/places.mjs';

// Footer date handling
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });
}

// Also fix hamburger animation
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const hamburger = document.querySelector('.hamburger');
  
  menuToggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
  });
});

// Navigation Wayfinding - set active class for current page
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Visit message
  const visitMessage = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();

  if (!lastVisit) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      visitMessage.textContent = "Back so soon! Awesome!";
    } else {
      const dayWord = days === 1 ? 'day' : 'days';
      visitMessage.textContent = `You last visited ${days} ${dayWord} ago.`;
    }
  }
  localStorage.setItem('lastVisit', now.toString());

  // Build places
  const placesContainer = document.getElementById('places');
  places.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'place-card';
    card.style.gridArea = `card${index + 1}`;
    card.innerHTML = `
      <h2>${place.name}</h2>
      <figure>
        <img src="${place.image}" alt="${place.name}" loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn More</button>
    `;
    placesContainer.appendChild(card);
  });
});