let array0406 = [2, 5, 7, 15, -5, -100, 55];
let contador0406 = 0;
function cuantosPositivos0406(arr0406){
    for(let numer0406 of arr0406){
        if (numer0406 > 0)
            contador0406++;

    }
    return contador0406;
}

let resultado0406 = cuantosPositivos0406(array0406);
console.log(resultado0406);