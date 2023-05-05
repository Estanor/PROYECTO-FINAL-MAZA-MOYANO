//lista de mangas
const mangas = [
    "Attack on Titan",
    "Chainsaw Man",
    "Berserk",
    "Vinland Saga",
    "Black Clover",
    "GUNNM: Battle Angel Alita",
    "Bleach",
    "Innocent",
    "Kaguya-Sama: Love is War",
    "My Dress-up Darling",
    "Oshi no Ko",
    "My Hero Academia",
    "Spy x Family",
    "Jojo's Bizarre Adventure",
];

const selectMangas= document.querySelector('#mangas')

mangas.forEach((manga)=>{
    let option =document.createElement('option');
    option.value= manga;
    option.innerText= manga;
    selectMangas.appendChild(option)
})
selectMangas.addEventListener('change', ()=>{
    let option= selectMangas.options[selectMangas.selectedIndex].value
    console.log(option);
}
)
//formulario (completa con tus datos)
const formulario = document.querySelector("#form-login");
console.log(formulario); 
formulario.addEventListener("submit", (e) => {
e.preventDefault();
console.log(e);
console.log(e.target);
console.log(e.target[0].value);
console.log(e.target[1].value);

});


//storage y JSON

localStorage.setItem("darkMode", false);
sessionStorage.setItem("user", "Estanislao")
sessionStorage.setItem("nickName", "EstanorElDiosDelOlimpo")

let user= sessionStorage.getItem("user"), nickName= sessionStorage.getItem("nickName")
console.log(user);
console.log(nickName);

const tomo= {id:1, nombre:"ChainsawManVol1", precio:1800}

const enJSON= JSON.stringify({id:1, nombre:"ChainsawManVol1", precio:1800})

localStorage.setItem("tomo", enJSON)

let volume= localStorage.getItem('tomo')
console.log(volume);

let cartItems = [];

function addToCart(name, price) {
const item = {
    name: name,
    price: price
};
cartItems.push(item);
updateCart();
}

function updateCart() {
const cartItemsElement = document.getElementById("cart-items");
cartItemsElement.innerHTML = "";
let total = 0;
for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const itemElement = document.createElement("li");
    itemElement.textContent = item.name + " - $" + item.price;
    cartItemsElement.appendChild(itemElement);
    total += item.price;
}
const cartTotalElement = document.getElementById("cart-total");
cartTotalElement.textContent = total;
}

const productos = document.querySelectorAll("#productos li");

document.querySelector("#filtro").addEventListener("keyup", function(event) {
const texto = event.target.value.toLowerCase();
productos.forEach(function(producto) {
    const productoTexto = producto.textContent.toLowerCase();
    if (productoTexto.indexOf(texto) !== -1) {
    producto.style.display = "block";
    } else {
    producto.style.display = "none";
    }
});
});
//Promesa
/*const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            res ? resolve("Promesa Resuelta") : reject("Promesa Rechazada");
        }, 2500);
    });
}
*/
//console.log(eventoFuturo(true));
//console.log(eventoFuturo(false));

let chainsawmanvol1 = true;
let berserkvol22 = false;
const comprarMangas = (respuesta) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            respuesta ? resolve("tu tomo está listo") : reject ("no hay disponibilidad del tomo");
        }, 2500);
    });
};

// metodo then y catch
comprarMangas(chainsawmanvol1)
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});

comprarMangas(berserkvol22)
.then((response) => {
    console.log(response);
})
.catch((error) => {
    console.log(error);
});

fetch//
fetch("https://jsonplaceholder.typicode.com/posts/")
.then((respuesta) => respuesta.json())
.then((data) =>{
    console.log(data);
})

fetch('../data/datos.json')
.then((res) => res.json())
.then(data=>{
    console.log(data)
})