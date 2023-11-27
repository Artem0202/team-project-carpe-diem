// Отримуємо елементи з DOM
const modal = document.querySelector('.mobile-menu');
const modalClose = document.querySelector('.close-btn');
const openModalButton = document.querySelector('.mobile-btn');

// Функція, яка показує модальне вікно
function openModal() {
  modal.style.display = 'block';
}

// Функція, яка ховає модальне вікно
function closeModal() {
  modal.style.display = 'none';
}

// Запускаємо модальне вікно, коли клікаємо на кнопку "Відкрити модальне вікно"
openModalButton.addEventListener('click', openModal);

// Закриваємо модальне вікно, коли клікаємо на кнопку "×"
modalClose.addEventListener('click', closeModal);

// Закриваємо модальне вікно, коли клікаємо поза ним
window.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
