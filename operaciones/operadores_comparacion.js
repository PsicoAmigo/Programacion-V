console.log("<------->");
console.log(new Date().toDateString());


//Igual
let counter = 100;
let response = 100 == "100"; //Comparacion
console.log(`${counter} == '100' => ${response}`);

//Estrictamente Igual tanto igualdad en numero como en el tipo de dato
let responseB = 100 === "100"; //Comparacion
console.log(`${counter} == '100' => ${responseB}`);

//diferente != Cuando es diferente retorna un true cuando es igual es false
let brand = "mazda";
let responseC = brand != "Chevrolet";
console.log(`${brand} != 'Mazda' => ${responseC}`);//True

//Estrictamente diferente !==
let numberA = 10;
let responseA = numberA != "10";
console.log(`${numberA} != '10' => ${responseA}`);
let responseD = numberA !== "10";
console.log(`${numberA} !== '10' => ${responseD}`);

//Mayor >
console.log(`counter > 10 ? ${counter > 10}`);

//Mayor Igual >=
console.log(`counter > 10 ? ${counter >= 99}`);

//Menor <
console.log(`counter < 10 ? ${counter < 100}`);

//Menor Igual <=
console.log(`counter <= 10 ? ${counter <= 100}`);



