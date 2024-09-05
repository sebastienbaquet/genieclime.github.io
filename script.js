document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".close-btn");

  // Affiche le menu déroulant en cliquant sur le bouton burger
  burger.addEventListener("click", () => {
    menuOverlay.style.display = "block"; // Affiche le menu déroulant
    setTimeout(() => {
      menuOverlay.querySelector(".menu-content").classList.add("active");
    }, 10); // Petit délai pour s'assurer que l'animation fonctionne correctement
  });

  // Ferme le menu déroulant en cliquant sur le bouton de fermeture
  closeBtn.addEventListener("click", () => {
    menuOverlay.querySelector(".menu-content").classList.remove("active");
    setTimeout(() => {
      menuOverlay.style.display = "none"; // Cache le menu déroulant
    }, 300); // Attends la fin de l'animation
  });

  // Ferme le menu déroulant si l'utilisateur clique en dehors
  window.addEventListener("click", (e) => {
    if (e.target === menuOverlay) {
      closeBtn.click(); // Utilise la fonction de fermeture pour gérer le clic en dehors
    }
  });
});
