let array = [2, 5, 7, 15, -5, -100, 55];
let contador = 0;
function cuantosPositivos(arr){
    for(let numer of arr){
        if (numer > 0)
            contador++;

    }
    return contador;
}

let resultado = cuantosPositivos(array);
console.log(resultado);