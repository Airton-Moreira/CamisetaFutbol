/* ===========================================================
   CONFIGURACIÓN — modificá estos valores fácilmente
=========================================================== */
const CONFIG = {
  whatsappNumber: "5493548596181", // <-- reemplazar por el número real (código de país + área + número, sin + ni espacios)
  instagramUser: "Airton_mra", // <-- reemplazar por el usuario real de Instagram
  instagramUrl: "https://instagram.com/Airton_mra"
};

const STATUS_LABELS = {
  "available": "Disponible",
  "on-order": "Por pedido",
  "out-of-stock": "Sin stock"
};

const STATUS_DOT = {
  "available": "🟢",
  "on-order": "🟡",
  "out-of-stock": "🔴"
};

/* ===========================================================
   ESTADO DE FILTROS
=========================================================== */
const state = {
  searchTerm: "",
  category: "all",
  status: "all"
};

/* ===========================================================
   HELPERS
=========================================================== */
function formatPrice(n){
  return "$" + n.toLocaleString("es-AR");
}

function whatsappLink(message){
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function buildMessage(product){
  if(product.status === "available"){
    return `Hola! Estoy interesado/a en la camiseta ${product.name}. ¿Sigue disponible?`;
  }
  if(product.status === "on-order"){
    return `Hola! Quisiera consultar para pedir la camiseta ${product.name}.`;
  }
  return `Hola! Quisiera saber si volverá a estar disponible la camiseta ${product.name}.`;
}

function whatsappButtonLabel(status){
  if(status === "available") return "CONSULTAR POR WHATSAPP";
  if(status === "on-order") return "PEDIR POR WHATSAPP";
  return "CONSULTAR DISPONIBILIDAD";
}

function matchesSearch(product, term){
  if(!term) return true;
  const haystack = `${product.name} ${product.team} ${product.season} ${product.category}`.toLowerCase();
  return haystack.includes(term.toLowerCase());
}

function matchesFilters(product){
  const catOk = state.category === "all" || product.category === state.category;
  const statusOk = state.status === "all" || product.status === state.status;
  const searchOk = matchesSearch(product, state.searchTerm);
  return catOk && statusOk && searchOk;
}

function isFiltering(){
  return state.searchTerm.trim() !== "" || state.category !== "all" || state.status !== "all";
}

/* ===========================================================
   RENDER: TARJETA DE PRODUCTO
=========================================================== */
function createProductCard(product){
  const card = document.createElement("article");
  card.className = "product-card";
  card.dataset.id = product.id;

  const dim = product.status === "out-of-stock" ? "dim" : "";

  card.innerHTML = `
    <div class="card-media ${dim}">
      <div class="card-tags">
        ${product.fewLeft ? '<span class="tag tag-few">FALTAN POCAS</span>' : ""}
      </div>
      <span class="status-dot ${product.status}"></span>
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
    </div>
    <div class="card-info">
      <p class="card-name">${product.name}</p>
      <p class="card-meta">${product.team.toUpperCase()} · ${product.season}</p>
      <div class="card-bottom">
        <span class="card-price">${formatPrice(product.price)}</span>
        <span class="card-status ${product.status}">${STATUS_LABELS[product.status].toUpperCase()}</span>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(product));
  return card;
}

function renderGrid(container, products){
  container.innerHTML = "";
  products.forEach(p => container.appendChild(createProductCard(p)));
}

/* ===========================================================
   RENDER: VISTA POR CATEGORÍAS vs. VISTA DE RESULTADOS
=========================================================== */
const categorySectionsEl = document.getElementById("categorySections");
const resultsSectionEl = document.getElementById("resultsSection");
const resultsGridEl = document.getElementById("resultsGrid");
const resultsTitleEl = document.getElementById("resultsTitle");
const resultsCountEl = document.getElementById("resultsCount");
const emptyStateEl = document.getElementById("emptyState");

function renderDefaultView(){
  const grids = document.querySelectorAll("[data-grid]");
  grids.forEach(grid => {
    const cat = grid.dataset.grid;
    const items = ALL_PRODUCTS.filter(p => p.category === cat);
    renderGrid(grid, items);
  });
}

function renderFilteredView(){
  const filtered = ALL_PRODUCTS.filter(matchesFilters);

  let title = "Resultados";
  if(state.searchTerm.trim()){
    title = `Resultados para "${state.searchTerm.trim()}"`;
  } else if(state.category !== "all"){
    const labels = {
      "argentina": "Argentina",
      "variedad": "Variedad",
      "futbol-argentino": "Fútbol Argentino",
      "retro": "Retro",
      "shorts": "Shorts"
    };
    title = labels[state.category] || "Resultados";
  }
  resultsTitleEl.textContent = title;
  resultsCountEl.textContent = `${filtered.length} ${filtered.length === 1 ? "producto" : "productos"}`;

  renderGrid(resultsGridEl, filtered);
  emptyStateEl.hidden = filtered.length !== 0;
  resultsGridEl.style.display = filtered.length === 0 ? "none" : "grid";
}

function updateView(){
  if(isFiltering()){
    categorySectionsEl.hidden = true;
    resultsSectionEl.hidden = false;
    renderFilteredView();
  } else {
    categorySectionsEl.hidden = false;
    resultsSectionEl.hidden = true;
  }
}

/* ===========================================================
   FILTROS: CATEGORÍA Y ESTADO
=========================================================== */
const categoryFilterButtons = document.querySelectorAll("[data-filter-cat]");
const statusFilterButtons = document.querySelectorAll("[data-filter-status]");

categoryFilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryFilterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.category = btn.dataset.filterCat;
    updateView();
  });
});

statusFilterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    statusFilterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    state.status = btn.dataset.filterStatus;
    updateView();
  });
});

/* ===========================================================
   BÚSQUEDA
=========================================================== */
const searchInput = document.getElementById("searchInput");
let searchDebounce;
searchInput.addEventListener("input", (e) => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    state.searchTerm = e.target.value;
    updateView();
  }, 120);
});

/* ===========================================================
   MODAL DE PRODUCTO
=========================================================== */
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const galleryTrack = document.getElementById("galleryTrack");
const galleryDots = document.getElementById("galleryDots");
const galleryPrev = document.getElementById("galleryPrev");
const galleryNext = document.getElementById("galleryNext");

let galleryIndex = 0;
let galleryImages = [];

function openModal(product){
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalMeta").textContent = `${product.team.toUpperCase()} · TEMPORADA ${product.season}`;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalDescription").textContent = product.description;
  document.getElementById("modalStatusText").textContent = STATUS_LABELS[product.status];
  document.getElementById("modalSizes").textContent = product.sizes.join(" / ");

  const statusPill = document.getElementById("modalStatus");
  statusPill.textContent = `${STATUS_DOT[product.status]} ${STATUS_LABELS[product.status].toUpperCase()}`;
  statusPill.className = `status-pill ${product.status}`;

  const badgesEl = document.getElementById("modalBadges");
  badgesEl.innerHTML = product.fewLeft ? '<span class="tag tag-few">FALTAN POCAS</span>' : "";

  const whatsappBtn = document.getElementById("modalWhatsapp");
  whatsappBtn.href = whatsappLink(buildMessage(product));
  document.getElementById("modalWhatsappLabel").textContent = whatsappButtonLabel(product.status);

  galleryImages = product.images;
  galleryIndex = 0;
  renderGallery();

  modalOverlay.classList.add("open");
  document.body.classList.add("modal-locked");
}

function closeModal(){
  modalOverlay.classList.remove("open");
  document.body.classList.remove("modal-locked");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if(e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape" && modalOverlay.classList.contains("open")) closeModal();
  if(e.key === "ArrowRight" && modalOverlay.classList.contains("open")) moveGallery(1);
  if(e.key === "ArrowLeft" && modalOverlay.classList.contains("open")) moveGallery(-1);
});

/* --- Galería / slider manual --- */
function renderGallery(){
  galleryTrack.innerHTML = "";
  galleryDots.innerHTML = "";

  galleryImages.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagen ${i + 1}`;
    galleryTrack.appendChild(img);

    const dot = document.createElement("span");
    dot.className = "gallery-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(i));
    galleryDots.appendChild(dot);
  });

  updateGalleryPosition();
}

function updateGalleryPosition(){
  galleryTrack.style.transform = `translateX(-${galleryIndex * 100}%)`;
  document.querySelectorAll(".gallery-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === galleryIndex);
  });
}

function moveGallery(dir){
  galleryIndex = (galleryIndex + dir + galleryImages.length) % galleryImages.length;
  updateGalleryPosition();
}

function goToSlide(i){
  galleryIndex = i;
  updateGalleryPosition();
}

galleryPrev.addEventListener("click", () => moveGallery(-1));
galleryNext.addEventListener("click", () => moveGallery(1));

/* --- Touch / swipe --- */
const galleryViewport = document.getElementById("galleryViewport");
let touchStartX = 0;
let touchDeltaX = 0;

galleryViewport.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
  touchDeltaX = 0;
}, { passive: true });

galleryViewport.addEventListener("touchmove", (e) => {
  touchDeltaX = e.touches[0].clientX - touchStartX;
}, { passive: true });

galleryViewport.addEventListener("touchend", () => {
  if(Math.abs(touchDeltaX) > 40){
    moveGallery(touchDeltaX < 0 ? 1 : -1);
  }
});

/* ===========================================================
   NAVEGACIÓN MOBILE
=========================================================== */
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("open");
  mobileNav.classList.toggle("open");
});

document.querySelectorAll(".mobile-link").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("open");
    mobileNav.classList.remove("open");
  });
});

/* ===========================================================
   ENLACES GENERALES DE WHATSAPP / INSTAGRAM
=========================================================== */
function setGeneralWhatsappLinks(){
  const genericMessage = "Hola! Quería consultar por las camisetas del catálogo.";
  const link = whatsappLink(genericMessage);
  ["navWhatsapp", "mobileWhatsapp", "footerWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if(el){
      el.href = link;
      el.target = "_blank";
      el.rel = "noopener";
    }
  });
  const igEl = document.getElementById("footerInstagram");
  if(igEl){
    igEl.href = CONFIG.instagramUrl;
    igEl.target = "_blank";
    igEl.rel = "noopener";
  }
}

/* ===========================================================
   INIT
=========================================================== */
document.getElementById("footerYear").textContent = new Date().getFullYear();
setGeneralWhatsappLinks();
renderDefaultView();
updateView();
