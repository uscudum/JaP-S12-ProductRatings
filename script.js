const URL = 'https://fakestoreapi.com/products'

document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})
let arrayProducts = [];


async function fetchData(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        arrayProducts = data;
        showProducts();

    } catch (error){
        alert('Error',error);
    }
    

}



function showProducts() {
    let products = document.getElementById('products');
    arrayProducts.forEach(product=>{
                
        products.innerHTML += `
            <div class="list-group-item" >
                <h4>${cutString(product.title)}</h4>
                <p>${new Date().toLocaleString()} ${stars(product.rating.rate)}</p>
                

            </div>
            
        `

    })



}


function stars(cantidad) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= cantidad) {
            starsHTML += '<span class="fa fa-star checked"></span>';
        } else {
            starsHTML += '<span class="fa fa-star"></span>';
        }
    }
    return starsHTML;
}
function cutString(string) {
    return string.length > 20 ? string.substring(0, 20) + "..." : string;
}


