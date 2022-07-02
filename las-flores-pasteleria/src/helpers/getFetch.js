const productos = [
  {
    id: 1,
    tipo: "Tortas",
    img: "./../imgs/tortas/coco.jpg",
    nombre: "Torta de coco",
    cantidad: 1,
    precio: "$1000",
  },
  {
    id: 2,
    tipo: "Tortas",
    img: "./../imgs/tortas/frutilla.jpg",
    nombre: "Torta de frutilla",
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
  }, 1000);
});
