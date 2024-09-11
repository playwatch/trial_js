function crearUsuario(name, email){
    return{
        email,
        name,
        activo: true,
        recuperarClave: function(){
            console.log('recuperando clave...');
        },
    };
}

let user = crearUsuario('nico', 'x@gmail.com');
console.log(user);