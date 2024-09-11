let pares = [
    [1, {id:1, name: "nico"}],
    [2, {id:2, name: "felip"}],
    [3, {id:3, name: "chan"}],
];

let array = [{
    id: 1,
    name: 'nico',
}, {
    id: 2,
    name: 'felip',
}, {
    id: 3,
    name: 'chan',
}];

function toPairs(arr){
    let pairs = [];
    for(identi in arr){
       let elemento = arr[identi];
       pairs[identi] = [elemento.id, elemento];
    }    
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);