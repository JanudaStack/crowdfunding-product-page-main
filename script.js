const modal = document.getElementById('back-project-modal');
const modalOverlay = modal.querySelector('.modal__overlay');
const modalClose = modal.querySelector('.modal__close');
const openModalButton = document.querySelector('.btn--primary'); // Adjust selector if needed

// Open modal
openModalButton.addEventListener('click', () => {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
});

// Close modal
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}
