console.log("---------objetos------")

let car={

    brand: "audi",
    weight:  1500,
    color:  "black",
    model: 2025,
    cc: 1200,
    fuelType: "gasolina",

};
console.table(car);

//acceder a una  caracteristica de un objeto

console.log(car.brand);
console.log(car["color"]); //con corchetes

// agregar una nueva caracteristica

car["brand"] =  "BMW";
console.table(car) ;

//conocer todas las propiedades de un objeto 

console.log(Object.keys(car)); //devuelve los nombres de las propiedades
console.log(Object.values(car)) // devuelve los valores de las propiedas




