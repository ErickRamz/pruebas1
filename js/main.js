// Año dinámico en el footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('contactSuccessMsg');
    msg.classList.remove('d-none');
    setTimeout(() => {
      msg.classList.add('d-none');
      contactForm.reset();
    }, 3000);
  });
}

// Formulario de agendar cita
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = document.getElementById('bookingSuccessMsg');
    msg.classList.remove('d-none');
    setTimeout(() => {
      msg.classList.add('d-none');
      bookingForm.reset();
    }, 2500);
  });
}
