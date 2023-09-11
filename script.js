const URL = 'https://fakestoreapi.com/products'
const products = document.getElementById('products');


document.addEventListener("DOMContentLoaded", function (e) {
    fetchData(URL)
})

async function fetchData(URL) {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        let fecha = new Date();
        data.forEach((comment)=>{          
            products.appendChild(createCommentComponent(limitedString(comment.title), mostrarEstrellas(comment.rating.rate), fecha))
        })
      
    } catch (error) {
        console.log(error)
    }
};


const createCommentComponent = (title, score, date)=>{
    const commentElement = document.createElement("div")
   
     commentElement.innerHTML = `        
   <div  class="commentContainer card">
   <p  class="commentUser">${title}</p>
   <p  class="commentScore">${score}</p>
   <p  class="commentScore">${date}</p>
   </div>
   `
   return commentElement
   }

function mostrarEstrellas(estrellas){
  const niceStars =  '<span class="fa fa-star checked"></span>'.repeat(estrellas) 
  const badStars = '<span class="fa fa-star"></span>'.repeat(5 - estrellas )
   return niceStars + badStars
};


function limitedString(string) {

    if (string.length > 20) {
     string = string.slice(0, 20) + '...';
     return string
    } else{
        return string
    }
}


// function tituloLimitado (string, limite = 20){
//     if (string.length <= limite) {
//         return string;
//     } else {
//         return string.substring(0, limite) + "..."
//     }
// }