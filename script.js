const URL = 'https://fakestoreapi.com/products'
const conteiner = document.getElementById("products");

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        products = data;
        showProducts(data)    
    } catch (error) {
     console.log(error)   
    }
}



function showProducts(data) {
    for (const producto of data) {
        conteiner.innerHTML += `
            <div class="list-group-item list-group-item-action cursor-active">
                <h3>
                    ${cutString(producto.title, 20)}
                </h3>
                <small class="text-muted">
                    ${getCurrentDateTime()}
                </small>
                <span>
                    ${stars(Math.trunc(producto.rating.rate))}
                </span>
            </div>
        `
    }
}

function stars(number) {
    const stars =  '<i class="fa fa-star checked"></i>'.repeat(number) 
    const starsEmpty = '<i class="fa fa-star"></i>'.repeat(5 - number )
    return stars + starsEmpty
} 

function cutString(string, maxLength) {
    if (string.length > maxLength) {
        return string.substring(0, maxLength) + '...';
    }
    return string;
}



function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString();
}
