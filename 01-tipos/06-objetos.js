/* personaje de anime
let nombre = "tanjiro";
let anime = "demon";
let edad = 16;
*/
let personaje0106 = {
    nombre0106: "tanjiro",
    anime0106: "demon",
    edad0106: 16,
};

console.log(personaje0106);
console.log(personaje0106.nombre0106);
console.log(personaje0106['anime0106']);
//personaje0106.edad0106 = 13;
let llave0106 = 'edad0106';
personaje0106[llave0106] = 15;

delete personaje0106.anime0106;
console.log(personaje0106);