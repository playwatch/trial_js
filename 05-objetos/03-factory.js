function crearUsuario0503(name0503, email0503){
    return{
        email0503,
        name0503,
        activo0503: true,
        recuperarClave0503: function(){
            console.log('recuperando clave...');
        },
    };
}

let user0503 = crearUsuario0503('nico', 'x@gmail.com');
console.log(user0503);