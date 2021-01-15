'use strict';

const Elements = {
    modal: document.querySelector(`.modal`),
    overlay: document.querySelector(`.overlay`),
    btnCloseModal: document.querySelector(`.close-modal`),
    btnsOpenModal: document.querySelectorAll(`.show-modal`),
}

const closeModal = () => {
    Elements.overlay.classList.add('hidden');
    Elements.modal.classList.add('hidden');   
}

const openModal = () => {
    Elements.overlay.classList.remove('hidden');
    Elements.modal.classList.remove('hidden');
}

Elements.btnsOpenModal.forEach(element => {
    element.addEventListener('click', openModal)
})

Elements.btnCloseModal.addEventListener('click', closeModal);
Elements.overlay.addEventListener('click', closeModal);

document.addEventListener('keypress', event => {
    if (event.key === `Escape` && !Elements.modal.classList.contains('hidden')) closeModal();
})