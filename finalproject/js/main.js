document.addEventListener('DOMContentLoaded', () => {
    initApp();
    initHamburgerMenu();
});

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('nav-open');
    });
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('nav-open');
        });
    });
}

function initApp() {
    loadItems();
    initContactForm();
}

async function loadItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    
    if (!itemsContainer) return;
    
    try {
        const response = await fetch('data/items.json');
        const items = await response.json();
        
        renderItems(items);
    } catch (error) {
        console.error('Error loading items:', error);
        itemsContainer.innerHTML = '<p>Unable to load items at this time.</p>';
    }
}

function renderItems(items) {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = '';
    
    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.className = 'item-card';
        itemCard.innerHTML = `
            <img src="${item.image || ''}" alt="${item.name}" class="item-image">
            <h3>${item.name}</h3>
            <p class="category">${item.category || ''}</p>
            <p>${item.description}</p>
            <p class="price">${typeof item.price === 'number' ? '$' + item.price.toFixed(2) : item.price}</p>
        `;
        
        itemCard.addEventListener('click', () => {
            openModal(item);
        });
        
        itemsContainer.appendChild(itemCard);
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        window.location.href = 'thankyou.html';
    });
}