function getMenorMayor(arr){
    let mayor=arr[0],menor=arr[0];
    for (let numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
        
    }
   
    return [menor, mayor];
}

let array = [2, 5, 7, 15, -5, -100, 55];
let numeros = getMenorMayor(array);
console.log(numeros);