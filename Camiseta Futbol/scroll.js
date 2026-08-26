const toolbar = document.querySelector(".toolbar");
let lastScrollY = window.scrollY;

function handleScroll() {
  if (!toolbar) return;

  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  // Si bajamos más de 150px del inicio de la página y vamos hacia abajo, ocultamos
  if (scrollingDown && currentScrollY > 150) {
    toolbar.classList.add("toolbar-hidden");
  } 
  // Al hacer scroll hacia arriba (o estar cerca del top), reaparece
  else if (!scrollingDown || currentScrollY <= 100) {
    toolbar.classList.remove("toolbar-hidden");
  }

  // Guardamos la última posición del scroll
  lastScrollY = currentScrollY;
}

// Escuchamos el scroll de la ventana
window.addEventListener("scroll", handleScroll, { passive: true });

// Al cambiar de categoría o hacer clic en un filtro, forzamos la reaparición del toolbar
document.addEventListener("click", (e) => {
  if (e.target.closest(".filter-chip") || e.target.closest(".status-chip")) {
    toolbar.classList.remove("toolbar-hidden");
  }
});