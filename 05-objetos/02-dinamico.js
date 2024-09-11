const user = {id: 1};

user.name = 'nico';
user.guardar = function(){
    console.log('Guardando', user.name );
}

user.guardar();
console.log(user.name);

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({
const user1 = Object.seal({
    id: 19
});
user1.name = 'name';
console.log(user1);