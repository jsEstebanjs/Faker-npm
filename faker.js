const { faker } = require('@faker-js/faker');
const fs = require('fs');

function generateUsers(){
    let users = []
    for(let i = 0;i<1000;i++){
        const randomName = faker.name.fullName();
        users.push(randomName);
    }
    return users
}
const generateData = generateUsers();
fs.writeFileSync(`names.txt`,generateData.join(" ") );
if(generateData.length === 1000){
    console.log("El proceso ha terminado satisfactoriamente")
}else{
    console.log("A ocurrido un error")
}



