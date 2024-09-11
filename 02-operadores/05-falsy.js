let nombre = '';
let usename = nombre || 'Anonimo';
console.log(usename);

function fn1(){
    console.log('funcion UNO');
    return true;
}

function fn2(){
    console.log('funcion DOS');
    return true;
}

let x = fn1() && fn2();