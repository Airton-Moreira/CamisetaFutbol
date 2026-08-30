// Datos de productos — modificá esta lista para actualizar el catálogo.
// Cada producto necesita: id, name, category, team, season, price, status, fewLeft, sizes, images, description
// status válidos: 'available' | 'on-order' | 'out-of-stock'
/*
Ejemplo de varias 

const PRODUCTS = [
     images: ["Imagenes/Argentina Suplente 1994.jpg", "assets/images/p2-back.svg", "assets/images/p2-crest.svg", "assets/images/p2-fabric.svg"],
*/


const PRODUCTS = [
  {
    id: 1,
    name: "Argentina Titular 2006",
    category: "argentina",
    team: "Argentina",
    season: "2006",
    price: 62000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Argentina/Argentina Titular 2006.jpg", "Imagenes/Argentina/Camiseta Argentina Titular 2006 2.jpg"],
    description: "Camiseta réplica inspirada en la edición utilizada por la Selección Argentina durante el Mundial 2006."
  },
  {
    id: 2,
    name: "Argentina Suplente 1994",
    category: "argentina",
    team: "Argentina",
    season: "1994",
    price: 68000,
    status: "on-order",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Argentina/Argentina Suplente 1994.jpg", "Imagenes/Argentina/Argentina Suplente 1994 2.jpg"],
    description: "Modelo inspirado en la alternativa argentina de Estados Unidos '94. Edición retro réplica."
  },
  {
    id: 3,
    name: "Argentina Titular 1986",
    category: "argentina",
    team: "Argentina",
    season: "1986",
    price: 72000,
    status: "available",
    fewLeft: true,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Argentina/Argentina Titular 1986.jpg", "Imagenes/Argentina/Argentina Titular 1986 2.jpg"],
    description: "Réplica de la camiseta con la que Argentina se consagró campeona del mundo en México '86."
  },
  {
    id: 4,
    name: "Argentina Titular Actual",
    category: "argentina",
    team: "Argentina",
    season: "2024",
    price: 58000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["Imagenes/Argentina/Argentina Titular Actual.jpg"],
    description: "Camiseta réplica del modelo titular vigente de la Selección Argentina, con las tres estrellas."
  },
  {
    id: 5,
    name: "Argentina Suplente Actual",
    category: "argentina",
    team: "Argentina",
    season: "2024",
    price: 58000,
    status: "available",
    fewLeft: true,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Argentina/Argentina Suplente Actual.jpg", "Imagenes/Argentina/Argentina Suplente Actual 2.jpg"],
    description: "Versión alternativa réplica del modelo actual de la Albiceleste."
  },
  {
    id: 6,
    name: "Argentina Tercera 2022",
    category: "argentina",
    team: "Argentina",
    season: "2022",
    price: 65000,
    status: "out-of-stock",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Argentina/Camiseta Argentina Titular 3 estrellas.jpg"],
    description: "Edición especial réplica utilizada durante la conquista de Qatar 2022."
  },
  {
    id: 7,
    name: "Noruega Titular",
    category: "variedad",
    team: "Noruega",
    season: "2023",
    price: 54000,
    status: "available",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Camiseta Titular Noruega.jpg"],
    description: "Camiseta réplica de la selección noruega, modelo actual."
  },
  {
    id: 8,
    name: "AC Milan Titular",
    category: "variedad",
    team: "Milan",
    season: "2023",
    price: 60000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Camiseta AC Milan.jpg"],
    description: "Réplica del modelo titular del Milan, con las clásicas rayas rojinegras."
  },
  {
    id: 9,
    name: "Real Madrid Titular",
    category: "variedad",
    team: "Real Madrid",
    season: "2021",
    price: 63000,
    status: "on-order",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Real Madrid Titular 2022.jpg"],
    description: "Camiseta réplica blanca del Real Madrid, modelo actual."
  },
  {
    id: 10,
    name: "Barcelona Titular",
    category: "variedad",
    team: "Barcelona",
    season: "2023",
    price: 63000,
    status: "available",
    fewLeft: true,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Barcelona Titular 2023.jpg"],
    description: "Réplica del histórico blaugrana en su versión titular."
  },
  {
    id: 11,
    name: "Manchester United Titular",
    category: "variedad",
    team: "Manchester United",
    season: "2023",
    price: 61000,
    status: "available",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Camiseta Manchester United 2023.jpg"],
    description: "Camiseta réplica roja del Manchester United, modelo actual."
  },
  {
    id: 12,
    name: "Manchester City Titular",
    category: "variedad",
    team: "Manchester City",
    season: "2023",
    price: 61000,
    status: "out-of-stock",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Camiseta Manchester City 2023.jpg"],
    description: "Réplica celeste del Manchester City, campeón de Europa."
  },
  {
    id: 13,
    name: "Brasil Titular",
    category: "variedad",
    team: "Brasil",
    season: "2023",
    price: 59000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Brasil Titular 2023.jpg"],
    description: "Camiseta réplica amarilla de la Canarinha, un clásico del fútbol mundial."
  },
  {
    id: 14,
    name: "España Titular",
    category: "variedad",
    team: "España",
    season: "2023",
    price: 59000,
    status: "on-order",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/España Titular 2023.jpg", "Imagenes/España Titular 2023 2.jpg"],
    description: "Réplica de la Roja, campeona de la última Eurocopa."
  },
  {
    id: 15,
    name: "Italia Titular",
    category: "variedad",
    team: "Italia",
    season: "2023",
    price: 59000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Italia titular 2026.jpg"],
    description: "Camiseta réplica azzurra de la selección italiana."
  },
  /*
  {
    id: 16,
    name: "Francia Titular",
    category: "variedad",
    team: "Francia",
    season: "2023",
    price: 59000,
    status: "available",
    fewLeft: false,
    sizes: ["M", "L", "XL", "XXL"],
    images: ["assets/images/p16-front.svg", "assets/images/p16-back.svg", "assets/images/p16-crest.svg", "assets/images/p16-fabric.svg"],
    description: "Réplica de la selección francesa, bicampeona mundial."
  },*/
  {
    id: 17,
    name: "Boca Juniors Titular",
    category: "futbol-argentino",
    team: "Boca Juniors",
    season: "2024",
    price: 56000,
    status: "available",
    fewLeft: true,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Boca Juniors Titular 2024.jpg", "Imagenes/Boca Juniors Titular 2024 2.jpg"],
    description: "Camiseta réplica azul y oro del Xeneize, modelo actual."
  },
  {
    id: 18,
    name: "River Plate Titular",
    category: "futbol-argentino",
    team: "River Plate",
    season: "2024",
    price: 56000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/River Plate Titular 2024.jpg", "Imagenes/River Plate Titular 2024 2.jpg"],
    description: "Réplica de la banda roja millonaria, modelo actual."
  },
  {
    id: 19,
    name: "Independiente Titular",
    category: "futbol-argentino",
    team: "Independiente",
    season: "2024",
    price: 54000,
    status: "on-order",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Camiseta Titular Independiente 2024.jpg"],
    description: "Camiseta réplica roja del Rey de Copas."
  },
  {
    id: 20,
    name: "Racing Club Titular",
    category: "futbol-argentino",
    team: "Racing Club",
    season: "2024",
    price: 54000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Racing Titular 2024.jpg"],
    description: "Réplica celeste y blanca de la Academia."
  },
  {
    id: 21,
    name: "San Lorenzo Titular",
    category: "futbol-argentino",
    team: "San Lorenzo",
    season: "2024",
    price: 54000,
    status: "out-of-stock",
    fewLeft: false,
    sizes: ["M", "L"],
    images: ["Imagenes/San Lorenzo Titular 2024.jpg"],
    description: "Camiseta réplica azulgrana del Ciclón."
  },
  {
    id: 22,
    name: "AC Milan Retro 90s",
    category: "retro",
    team: "Milan",
    season: "1990s",
    price: 78000,
    status: "available",
    fewLeft: true,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/AC Milan Titular 90.jpg"],
    description: "Edición retro réplica del Milan de los años 90, una era dorada del club."
  },
  {
    id: 23,
    name: "Real Madrid Retro 2000",
    category: "retro",
    team: "Real Madrid",
    season: "2007",
    price: 78000,
    status: "on-order",
    fewLeft: false,
    sizes: ["M", "L", "XL"],
    images: ["Imagenes/Real Madrid Titular 2007.jpg"],
    description: "Réplica retro del Real Madrid de la Novena Champions."
  },
  {
    id: 24,
    name: "Barcelona Retro 90s",
    category: "retro",
    team: "Barcelona",
    season: "1990s",
    price: 78000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["Imagenes/Barcelona Titular 2009.jpg"],
    description: "Modelo inspirado en el Barcelona del Dream Team de los años 90."
  },
];

// Shorts (categoría secundaria, catálogo reducido)
const SHORTS_PRODUCTS = [
  {
    id: 101,
    name: "Short Argentina Titular",
    category: "shorts",
    team: "Argentina",
    season: "2024",
    price: 22000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L", "XL"],
    images: ["Imagenes/Short Argentino 2024.jpg"],
    description: "Short réplica a juego con la camiseta titular de Argentina."
  },
  {
    id: 102,
    name: "Short Boca Juniors",
    category: "shorts",
    team: "Boca Juniors",
    season: "2024",
    price: 20000,
    status: "on-order",
    fewLeft: false,
    sizes: ["M", "L"],
    images: ["Imagenes/Short Boca Juniors 2024.jpg"],
    description: "Short réplica azul del Xeneize."
  },

  /*
  {
    id: 103,
    name: "Short River Plate",
    category: "shorts",
    team: "River Plate",
    season: "2024",
    price: 20000,
    status: "available",
    fewLeft: false,
    sizes: ["S", "M", "L"],
    images: ["assets/images/shorts-placeholder.svg"],
    description: "Short réplica blanco de River Plate."
  },*/
];

// Se unifican ambas listas en un solo catálogo de trabajo
const ALL_PRODUCTS = [...PRODUCTS, ...SHORTS_PRODUCTS];
