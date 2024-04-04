var brand = "mala-practica";
let counter = 100;
const token = "abc123";

//token = 12345;
counter = 200;
console.log(token);

//Comentarios de una linea

/*
Comentarios multilinea
*/

//Interpolacion
let interpolation =`El valor de counter es: ${counter}`;
console.log(interpolation);
console.log("El valor de counter es: ", counter);
console.log("El valor de counter es: " + counter);

//Mockaroo: para obtener datos
const persons = [{
    "id": "Wallis",
    "first_name": "Bernardoni"
  }, {
    "id": "Mauricio",
    "first_name": "Kless"
  }, {
    "id": "Jeramey",
    "first_name": "Klausen"
  }, {
    "id": "Poul",
    "first_name": "Thurlow"
  }, {
    "id": "Annmaria",
    "first_name": "Appleford"
  }, {
    "id": "Ardis",
    "first_name": "Moloney"
  }, {
    "id": "Arin",
    "first_name": "Comport"
  }, {
    "id": "Kendell",
    "first_name": "Poulter"
  }, {
    "id": "Heath",
    "first_name": "Wadly"
  }, {
    "id": "Bride",
    "first_name": "Tomczynski"
  }]
  
console.log(persons);
console.table(persons);



