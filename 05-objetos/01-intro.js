let user = {
    email: 'x@gmail.com',
    name: 'jit',
    direccion: {
        calle: 'curva',
        numero: '15',
    },
    activo: true,
    recuperarClave: function(){
        console.log('Recuperando clave...');
    },
};

console.log(user);