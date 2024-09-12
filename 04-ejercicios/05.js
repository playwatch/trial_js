function getMenorMayor0405(arr0405){
    let mayor0405=arr0405[0],menor0405=arr0405[0];
    for (let numero0405 of arr0405){
        menor0405 = menor0405 < numero0405 ? menor0405 : numero0405;
        mayor0405 = mayor0405 > numero0405 ? mayor0405 : numero0405;
        
    }
   
    return [menor0405, mayor0405];
}

let array0405 = [2, 5, 7, 15, -5, -100, 55];
let numeros0405 = getMenorMayor0405(array0405);
console.log(numeros0405);