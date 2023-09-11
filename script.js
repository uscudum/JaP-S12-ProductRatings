const URL = 'https://fakestoreapi.com/products'
let products = []
let d 
let fechaActual

const container = document.getElementById("products");


document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        products = data
        d = new Date();
        fechaActual = d.toLocaleString();
        showProducts(products)
    } catch (error) {
        console.error('Error al obtener datos:', error);
    }
}


function showProducts(array) {
    
    array.forEach(element => {
        const ratingEntero = Math.round(element.rating.rate)
        const starsHTML = stars(ratingEntero)
        const shortTitle = cutString(element.title);
        container.innerHTML += `<div class = "list-group-item">${shortTitle}<br>
         ${starsHTML} ${fechaActual} </div>
        `;
    });
}


function stars(ratingEntero) {
    let starsHTML = ""

    for (let index = 0; index < 5; index++) {
        if (index < ratingEntero) {
            starsHTML += '<span class="fa fa-star checked"></span>';
        } else {
            starsHTML += '<span class="fa fa-star"></span>';
        }
}
    return starsHTML;
}

function cutString(string) {
    if (string.length <= 20) {
        return string;
    } else {
        return string.slice(0, 20) + '...';
    }
}