let modalElement = null;

function createModal() {
    if (modalElement) return;
    
    modalElement = document.createElement('div');
    modalElement.className = 'modal';
    modalElement.id = 'itemModal';
    
    modalElement.innerHTML = `
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="modal-body"></div>
        </div>
    `;
    
    document.body.appendChild(modalElement);
    
    const closeBtn = modalElement.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    modalElement.addEventListener('click', (e) => {
        if (e.target === modalElement) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalElement.classList.contains('active')) {
            closeModal();
        }
    });
}

function openModal(item) {
    if (!modalElement) {
        createModal();
    }
    
    const modalBody = modalElement.querySelector('.modal-body');
    modalBody.innerHTML = `
        <h2>${item.name}</h2>
        ${item.image ? `<img src="${item.image}" alt="${item.name}" class="item-image" style="width: 100%; height: 250px; object-fit: cover; border-radius: 4px; margin: 1rem 0;">` : ''}
        <p>${item.description}</p>
        <p class="price">${typeof item.price === 'number' ? '$' + item.price.toFixed(2) : item.price}</p>
        ${item.category ? `<p><strong>Category:</strong> ${item.category}</p>` : ''}
    `;
    
    modalElement.classList.add('active');
}

function closeModal() {
    if (modalElement) {
        modalElement.classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', createModal);