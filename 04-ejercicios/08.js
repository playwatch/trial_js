let pares0408 = [
    [1, {id0408:1, name0408: "nico"}],
    [2, {id0408:2, name0408: "felip"}],
    [3, {id0408:3, name0408: "chan"}],
];

let array0408 = [{
    id0408: 1,
    name0408: 'nico',
}, {
    id0408: 2,
    name0408: 'felip',
}, {
    id0408: 3,
    name0408: 'chan',
}];

function toPairs0408(arr0408){
    let pairs0408 = [];
    for(identi0408 in arr0408){
       let elemento0408 = arr0408[identi0408];
       pairs0408[identi0408] = [elemento0408.id0408, elemento0408];
    }    
    return pairs0408;
}

let resultado0408 = toPairs0408(array0408);
console.log(resultado0408);