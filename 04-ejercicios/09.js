let pairs = [
    [1, {name: "nico"}],
    [2, {name: "feli"}],
    [3, {name: "chan"}],
];

function toCollection(pares){
    let array = [];
    for(i in pares){
        let elemento = pares[i];
        console.log(elemento);
        array[i] = elemento[1];
        array[i].id = elemento[0];
    }
    return array;
}

let resultado = toCollection(pairs);
console.log(resultado);