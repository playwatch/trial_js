let pairs0409 = [
    [1, {name0409: "nico"}],
    [2, {name0409: "feli"}],
    [3, {name0409: "chan"}],
];

function toCollection0409(pares0409){
    let array0409 = [];
    for(i0409 in pares0409){
        let elemento0409 = pares0409[i0409];
        console.log(elemento0409);
        array0409[i0409] = elemento0409[1];
        array0409[i0409].id0409 = elemento0409[0];
    }
    return array0409;
}

let resultado0409 = toCollection0409(pairs0409);
console.log(resultado0409);