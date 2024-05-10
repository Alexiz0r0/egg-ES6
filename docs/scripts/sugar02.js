const id = 1;
const name = 'Mike';
const country = {
    name: 'Peru',
    code: 'PE',
};
const birthday = '1979-07-17';
const alive = false;
const hobbies = ['dance', 'fitness', 'traveling'];

const user = {
    id,
    name,
    country,
    birthday,
    alive,
    hobbies,
}

console.log(user);
console.table(user);

const printUserInfo = () => {
    const containerSelector = document.getElementById('container');
    const title = document.createElement('h3');
    title.textContent = 'User Info';
    const paragraph = document.createElement('p');
    paragraph.textContent = `Name: ${user.name}`;
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = `Country: ${user.country.name} (${user.country.code})`;
    const paragraph3 = document.createElement('p');
    paragraph3.textContent = `Birthday: ${user.birthday}`;
    containerSelector.appendChild(title);
    containerSelector.appendChild(paragraph);
    containerSelector.appendChild(paragraph2);
    containerSelector.appendChild(paragraph3);
}

printUserInfo();

console.log(`
:::'##::::'##::::'##::::'##::::'##:'##::::'##::::'##::::'##::::'##::::
`
)

const hobbiesList = {
    enPareja: ['Ver películas juntos', 'Salir a cenar', 'Viajar', 'Hacer ejercicio en pareja', 'Cocinar juntos'],
    conAmigos: ['Jugar videojuegos', 'Practicar deportes al aire libre', 'Organizar barbacoas', 'Ir a conciertos', 'Hacer senderismo'],
    conFamilia: ['Jugar juegos de mesa en familia', 'Realizar reuniones familiares', 'Ver programas de televisión juntos', 'Organizar barbacoas', 'Ir a parques de diversiones'],
};

const {enPareja, conFamilia} = hobbiesList;
const [, , h3] = enPareja;
const [, , , h4] = conFamilia;

const printHobbiesInfo = (h1, h2) => {
    const containerSelector = document.getElementById('hobbies-seleccionados');
    const paragraph = document.createElement('p');
    paragraph.textContent = `Uno de mis hobbies favoritos para hacer en pareja es ${h1}, y uno de los mejores para hacer en familia es ${h2}`;
    containerSelector.appendChild(paragraph);
}

printHobbiesInfo(h3, h4);

console.log(`
:::'##::::'##::::'##::::'##::::'##:'##::::'##::::'##::::'##::::'##::::
`
)
const {hobbies: me, ...info} = user;
const allHobbies = {...hobbiesList, individual: me}
console.log(allHobbies);
const myUser = {...info, all: allHobbies};
console.log(myUser);

console.log(`
:::'##::::'##::::'##::::'##::::'##:'##::::'##::::'##::::'##::::'##::::
`
)
const {all} = myUser;
const {enPareja: enPareja2, conAmigos, conFamilia: conFamilia2, individual} = all;
const [, s] = individual;
const [, , t2, c2] = enPareja2;
const hobbiesWithFamily = [...conFamilia2];
const [p4] = conAmigos;

console.log("individual:",s);
console.log("enPareja2:",t2);
console.log("enPareja2:",c2);
console.log(hobbiesWithFamily);
console.log("conAmigos:",p4);

console.log(`
:::'##::::'##::::'##::::'##::::'##:'##::::'##::::'##::::'##::::'##::::
`
)
const response = {
    "id": "9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
    "name": "Harry Potter",
    "alternate_names": [
        "The Boy Who Lived",
        "The Chosen One",
        "Undesirable No. 1",
        "Potty"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
        "wood": "holly",
        "core": "phoenix tail feather",
        "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [],
    "alive": true,
    "image": "https://ik.imagekit.io/hpapi/harry.jpg"
}

const {name: nombre} = response;
console.log(nombre);

const {house, eyeColour, hairColour} = response;
console.log(`${nombre} lives in ${house} and has ${eyeColour} eyes and ${hairColour} hair.`);