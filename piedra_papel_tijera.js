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
  if (tirada != maquina) {
    if (
      (tirada == piedra && maquina == tijera) ||
      (tirada == papel && maquina == piedra) ||
      (tirada == tijera && maquina == papel)
    ) {
      console.log("Ganaste!");
    } else {
      console.log("La maquina te gano!");
    }
  } else {
    console.log("Empate");
  }
}

juego(2);
