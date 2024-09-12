function getByIdx0403(arr0403, idx0403){
    if(idx0403 >= 0 && idx0403 < arr0403.length )
        return arr0403[idx0403];
    else return 'el valor no existe';

}

let resultado0403 = getByIdx0403([4,5,6,7], -1);
console.log(resultado0403);