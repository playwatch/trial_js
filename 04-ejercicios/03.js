function getByIdx(arr, idx){
    if(idx >= 0 && idx < arr.length )
        return arr[idx];
    else return 'el valor no existe';

}

let resultado = getByIdx([4,5,6,7], -1);
console.log(resultado);