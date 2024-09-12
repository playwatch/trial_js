const user0502 = {id0502: 1};

user0502.name0502 = 'nico';
user0502.guardar0502 = function(){
    console.log('Guardando', user0502.name0502 );
}

user0502.guardar0502();
console.log(user0502.name0502);

delete user0502.name0502;
delete user0502.guardar0502;
console.log(user0502);

//const user10502 = Object.freeze({
const user10502 = Object.seal({
    id0502: 19
});
user10502.name0502 = 'name0502';
console.log(user10502);