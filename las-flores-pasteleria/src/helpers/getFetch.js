const productos = [
  {
    id: 1,
    tipo: "tortas",
    img: "./../imgs/tortas/coco.jpg",
    nombre: "Torta de coco",
    descripcion:
      "A lo seguro. Torta de ricota bien fresquita con decoración de dulce de leche. ¡Ideal para los mates!",
    cantidad: 1,
    precio: "$1000",
  },
  {
    id: 2,
    tipo: "tortas",
    img: "./../imgs/tortas/frutilla.jpg",
    nombre: "Torta de frutilla",
    descripcion:
      "Riquisima torta de frutilla con base de bizcochuelo y decoración de merengue a elección.",
    cantidad: 2,
    precio: "$2000",
  },
  {
    id: 3,
    tipo: "tortas",
    img: "./../imgs/tortas/lemon.jpg",
    nombre: "Torta de limón",
    descripcion:
      "Clásica torta lemon pie con base de bizcochuelo y decoración de copitos merengue.",
    cantidad: 4,
    precio: "$3000",
  },
  {
    id: 4,
    tipo: "galletas",
    img: "./../imgs/galletas/avena.jpg",
    nombre: "Galleta de Avena",
    descripcion: "Riquisima galleta de avena.",
    cantidad: 1,
    precio: "$1000",
  },
  {
    id: 5,
    tipo: "galletas",
    img: "./../imgs/galletas/chocolate.jpg",
    nombre: "Alfajor de Chocolate",
    descripcion: "Clásico alfajor de chocolate.",
    cantidad: 2,
    precio: "$2000",
  },
];

export const gFetch = new Promise((res, rej) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      res(productos);
    } else {
      rej("Error");
    }
  }, 2000);
});
