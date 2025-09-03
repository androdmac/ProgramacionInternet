// Scroll suave al hacer clic en el botón
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('¡Gracias por tu mensaje! 🐝');
  this.reset();
});
