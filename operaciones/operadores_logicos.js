console.log("Operadores Logicos");

//AND -> &&
const isThereCar = true;
const isThereMotorcycle = true;
const response = isThereCar && isThereMotorcycle;
console.log(`${isThereCar} && ${isThereMotorcycle} -> ${response}`);

//OR -> 


//NOT -> !
//Ejercicio 1
//let numberA = 10;
//console.log(`numberA >= 9 ? ${numberA >= 9}`);

//Ejercicio 2
//let numberB = 0;
//console.log(`numberB = 0 ? ${numberB == 0}`);

'midudev'.length;//7
console.log('midudev'.length);
'midudev'[1];//i
console.log('midudev'[0]);
'midudev'.includes('dev');//true
console.log('midudev'.includes('dev'));
'midudev'.indexOf('midu');//0
console.log('midudev'.indexOf('midu'));
'midudev'.startsWith('midu');//true
console.log('midudev'.startsWith('midu'));
'midudev'.endsWith('paint');//false
console.log('midudev'.endsWith('mid'));

console.log('midudev'.slice(0,4));//midu
console.log('midudev'.slice(4));//dev
console.log('midudev'.toUpperCase());
console.log('MidUDev'.toLowerCase());
