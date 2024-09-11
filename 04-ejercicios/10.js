
function crearArray(n){
    let array = [];
    let i = 0;
    while(i<n){
        array[i]= i+1;
        i++;
    }
    return array;
}
let numero = 7;
resultado = crearArray(numero);
console.log(resultado);