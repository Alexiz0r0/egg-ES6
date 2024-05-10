let myName = 'Jhuliño';
let job = "Full Stack Training"
let programmingLanguage = "TypeScript";
let programmingLanguage2 = "Java"
let hobbies = "Bailar";

console.log(`Hola soy ${myName}, ${job}. Mis lenguajes de programación favoritos son ${programmingLanguage} y ${programmingLanguage2}, y me apasiona ${hobbies}.` );


let isOnline = true;
/*let response = prompt("SI o NO");*/
response = 'SI'

if (response === "SI" || response === "NO") {
    if (isOnline && response === "SI") {
        console.log("Bienvenido");
    }
}

const object = {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}

console.log(object.title);
console.log(object.rating.count);
console.log(object.rating.comments?.length);
console.log(object.rating.comments?.length || 0);
console.log(object.rating.comments?.length ?? 0);


const printInfo = (etiqueta="pre3") => {
    const preSelected = document.getElementById(etiqueta);
    preSelected.textContent = `Esto es un nuevo texto en la etiqueta: ${etiqueta}`;
}

printInfo();
printInfo("pre2");