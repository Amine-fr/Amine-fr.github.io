function ouvrirBoite(header) {
  var body    = header.nextElementSibling;
  var chevron = header.querySelector('.chevron'); // Cible le bon nom de classe CSS
  
  body.classList.toggle('open');    // Utilise la classe '.open' définie dans le CSS
  chevron.classList.toggle('open'); // Idem pour faire tourner le chevron
}

function basculerMenu() {
  document.getElementById('mobile-menu').classList.toggle('open'); // Cible l'ID et la classe du CSS
}

function fermerMenuMobile() {
  document.getElementById('mobile-menu').classList.remove('open'); // Ferme proprement le volet mobile
}