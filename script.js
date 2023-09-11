const URL = 'https://fakestoreapi.com/products'
const CONTAINER = document.getElementById("products")


document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    showProducts(data)
}


function showProducts(data) {
    let date = new Date()
  
    data.forEach(element => {
        CONTAINER.innerHTML += `
        <div class="list-group-item">
            <p class="fw-bold">${cutString(element.title)}</p>
            <p class="fw-light">${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}
                ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
            ${stars(parseInt(element.rating.rate))}
            </p>
        </div>
        `
    });
}

function stars(cantidad) {
    let yellowStars = '<span class="fa fa-star checked"></span>'
    let blackStars = '<span class="fa fa-star"></span>'
    let yellowStarsNumber = Math.round(cantidad)
    let blackStarsNumber = 5 - yellowStarsNumber
    let htmlToAppend = `${yellowStars.repeat(yellowStarsNumber)}${blackStars.repeat(blackStarsNumber)}`
    
        return htmlToAppend
    

}

function cutString(string) {
    if(string.length > 21){
        return string.slice(0, 20)+"..."
    } else{
        return string
    } 
}
