document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validation du nom
    if (nameInput.value.trim() === "") {
      alert("Le champ nom est requis");
      isValid = false;
    }

    // Validation de l'email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
      alert("Veuillez entrer une adresse email valide");
      isValid = false;
    }

    // Validation du message
    if (messageInput.value.trim() === "") {
      alert("Le champ message est requis");
      isValid = false;
    }

    // Si le formulaire n'est pas valide, on empêche l'envoi
    if (!isValid) {
      event.preventDefault();
    }
  });
});

// Ajout d'un effet de survol sur les projets
const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    const details = project.querySelector('p');
    details.style.display = 'block';
    details.style.opacity = '0';
    setTimeout(() => {
      details.style.opacity = '1';
    }, 100); // Petit délai pour l'effet d'apparition
  });

  project.addEventListener('mouseout', () => {
    const details = project.querySelector('p');
    details.style.opacity = '0';
    setTimeout(() => {
      details.style.display = 'none';
    }, 300); // Délai avant de masquer le texte pour effet de disparition
  });
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});