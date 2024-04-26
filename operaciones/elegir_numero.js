const dataFromConsole = process.argv;
const number =+dataFromConsole[2];
let x =1;
while (x <= 10){
       let resultado= number*x;
    console.log(number,"x", x, "=", resultado);
    x++;
}