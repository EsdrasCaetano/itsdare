

const card = document.getElementById('cards')
const url = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1';
fetch(url)
    .then(response =>
        response.json()
    )
    .then(data => {
        console.log(data)
//      nextPage(data.nextPage)
       cardData(data.products)
    })
    .catch(err => console.log(err))

function cardData(data) {
    card.innerHTML = "";
    data.map(renderCard)
}



function renderCard(products) {
    const div = document.createElement('div')
    
    div.className = 'grid-item'
    div.innerHTML = `
    <div class="card">
        <img class="card-img" src="http://${products.image}">
        <div clas="card-body" >
            <h5 class="card-title">${products.name}</h5>
            <p class="card-text"> ${products.description}</p>
            <p class="card-text-de">De R$: ${products.price}</p>
            <p class="card-text-por">Por R$: ${products.price}</p>
            <p class="card-text-ou">ou ${products.installments.count}x de R$: ${products.installments.value}0</p>
            <button class="card-btn">Comprar</button>
        </div>
    </div>
    `
    card.appendChild(div)
}

