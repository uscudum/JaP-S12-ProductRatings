const URL = 'https://fakestoreapi.com/products';
const div_products = document.getElementById("products");

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL);
})

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    showProducts(data);
}


function showProducts(products) {
    for (let i = 0; i < products.length; i++) {
        div_products.innerHTML += `
            <li class="list-group-item">
                <h6>${getTitle(products[i].title)}</h6>
                <div>${getStars(products[i].rating.rate)}</div>
                <p class="text-muted">${Date()}</p>
            </div>
        `;
    }
}

function getTitle (title) {
    if(title.length > 20) {
        return cutString(title);
    } else {
        return title;
    }
}

function getStars(cantidad) {
    var rating = Math.round(cantidad);
    var currentRating = 0;
    var string = "";

    for (let i = 0; i < rating; i++) {
        string += '<span class="fa fa-star checked"></span>';
        currentRating++;
    }
    for (let i = currentRating; i < 5; i++) {
        string += '<span class="fa fa-star"></span>';
    }

    return string;
}

function cutString(string) {
    var newTitle = string.slice(0, 20) + "...";
    return newTitle;
}