/* personaje de anime
let nombre = "tanjiro";
let anime = "demon";
let edad = 16;
*/
let personaje = {
    nombre: "tanjiro",
    anime: "demon",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);
//personaje.edad = 13;
let llave = 'edad';
personaje[llave] = 15;

delete personaje.anime;
console.log(personaje);