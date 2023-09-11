const URL = 'https://fakestoreapi.com/products'
const contenedor = document.getElementById("products")

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    products = data
    const fechaYHoraActual = new Date();

    // Obtener la fecha actual en formato 'YYYY-MM-DD'
    const fecha = fechaYHoraActual.toISOString().split('T')[0];

    // Obtener la hora actual en formato 'HH:MM:SS'
    const hora = fechaYHoraActual.toTimeString().split(' ')[0];

    showProducts(products,fecha,hora)
}


function showProducts(products,fecha,hora) {
    try{
        contenedor.innerHTML="";
    for(let product of products){
        contenedor.innerHTML +=`
        <div class='list-group-item'>
        <p class='h4'>${cutString(product.title)}</p>
        <p class='h6'>${fecha},${hora} ${stars(product.rating.rate)}</p>
        </div>`;
    }
    }
    catch (error) {
        // Manejo de la excepción
        console.error('Error', error);
    }
    
}

function stars(cantidad) {
let string="";
const cantidadRedondeada=Math.round(cantidad);
for(let i=1;i<6;i++){
    if(i<=cantidadRedondeada){
    string += `<span class="fa fa-star checked"></span>`;
}else{
    string += `<span class="fa fa-star"></span>`;
}
}
return string;
}

function cutString(string) {
if(string.length<=20){
return string;
} else {
    return string.substring(0, 20 - 3) + '...';
}
}
