// FAQ accordéon
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
    // Ferme les autres
    document.querySelectorAll('.faq-item').forEach(other => {
      if (other !== item) other.classList.remove('open');
    });
  });
});

// (Facultatif) Formulaire : message de confirmation sans envoi réel
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Merci pour ton message ! Nous te contacterons rapidement.');
  this.reset();
});
