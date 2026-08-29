
const toolbar = document.querySelector(".toolbar");
const productsSection = document.querySelector("#argentina");

let lastScrollY = window.scrollY;

function handleScroll() {
  if (!toolbar || !productsSection) return;

  const currentScrollY = window.scrollY;
  const scrollingDown = currentScrollY > lastScrollY;

  // Posición donde comienza la primera sección de productos
  const productsTop = productsSection.offsetTop;

  // Cuando llegamos a la zona de productos, ocultamos el toolbar
  if (scrollingDown && currentScrollY >= productsTop) {
    toolbar.classList.add("toolbar-hidden");
  }

  // Si volvemos hacia arriba, mostramos nuevamente el toolbar
  else if (!scrollingDown) {
    toolbar.classList.remove("toolbar-hidden");
  }

  lastScrollY = currentScrollY;
}

window.addEventListener("scroll", handleScroll, { passive: true });

// Al cambiar de categoría o filtro, mostramos nuevamente el toolbar
document.addEventListener("click", (e) => {
  if (
    e.target.closest(".filter-chip") ||
    e.target.closest(".status-chip")
  ) {
    toolbar.classList.remove("toolbar-hidden");
  }
});
