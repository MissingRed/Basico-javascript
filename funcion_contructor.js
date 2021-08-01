function autoConstructor(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

var autos = [];

for (var i = 0; i < 3; i++) {
  var marca = prompt("Ingresa marca");
  var modelo = prompt("Ingresa modelo");
  var annio = prompt("Ingresa annio");

  autos.push(new autoConstructor(marca, modelo, annio));
}

for (var i = 0; i < autos.length; i++) {
  console.log(autos[i]);
}
