//Piedra papel o tijera con JS

/*
1. Tijera vence papel
2. Papel vence piedra
3. Piedra vence tijera
*/

let piedra = 1;
let papel = 2;
let tijera = 3;

function juego(tirada) {
  let maquina = Math.floor(Math.random() * 3) + 1;
  console.log(
    `La maquina tiro: ${
      maquina === 1 ? "Piedra" : maquina === 2 ? "Papel" : "Tijera"
    }`
  );

  switch (true) {
    case tirada === maquina:
      console.log("Empate!");
      break;
    case tirada == piedra && maquina == tijera:
      console.log("Ganaste!");
      break;
    case tirada == papel && maquina == piedra:
      console.log("Ganaste!");
      break;
    case tirada == tijera && maquina == papel:
      console.log("Ganaste!");
      break;
    default:
      console.log("La maquina te gano!");
      break;
  }
}

juego(2);

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

// let numero = 'a';
//con true los casos van a pasar
switch (true) {
  case user === machine:
    console.log("es un empate");
    break;
  case machine === "piedra" && user === "papel":
    console.log("Ganaste");
    break;
  case machine === "papel" && user === "tijera":
    console.log("Ganaste");
    break;
  case machine === "tijera" && user === "piedra":
    console.log("Ganaste");
    break;
  default:
    console.log("¡Perdiste!");
}
