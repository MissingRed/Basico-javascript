var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Tv", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 1020 },
  { nombre: "Laptop", costo: 10220 },
  { nombre: "Teclado", costo: 11220 },
  { nombre: "Audifonos", costo: 1220 },
];

var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500;
});

console.log(articulosFiltrados);

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

let numArray = [1, 2, 3, 4, 5];

function newNum() {
  numArray.push(6, 7);
}

// --- SHIFT ---

//Creamos el array
let array = [1, 2, 3, 4, 5];
console.log(array);

// Aplicamos .shift()
let shiftArray = array.shift();

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array);

// --- POP ---

//Creamos el array
let array = [1, 2, 3, 4, 5];
console.log(array);

// Aplicamos .shift()
let shiftArray = array.pop();

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array);
