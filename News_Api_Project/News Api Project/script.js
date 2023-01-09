const navigationBar = document.querySelector('.navbar')
const cardContainer = document.querySelector('.card-container')
const sportsContainer = document.querySelector('.sports-container')
const moviesContainer = document.querySelector('.movies-container')

function homeBar(){
    navbar()
}

homeBar()
function getApiData(id){
    fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f057be5199a5434ca44f8fdcaa8852d1')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);
       
        createCard(data.articles)
      
    })
}



function navbar(car){

    const cardd = document.createElement('div')
    cardd.classList.add('cardd')

    const buttonhome = document.createElement('button')
    buttonhome.innerHTML = 'HOME'
    buttonhome.addEventListener('click',()=>{
        cardContainer.classList.add('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.add('hide')
    })

    const button1 = document.createElement('button')
    button1.innerHTML = 'CRYPTO'
    button1.addEventListener('click',()=>{
        cardContainer.classList.remove('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.add('hide')
        console.log("Crypto")

       
    })

    const button2 = document.createElement('button')
    button2.innerHTML = 'MOVIES'
    button2.addEventListener('click',()=>{
        cardContainer.classList.add('hide')
        moviesContainer.classList.remove('hide')
        sportsContainer.classList.add('hide')
        getMoviesData()
        
    })

    const button3 = document.createElement('button')
    button3.innerHTML = 'SPORTS'
    button3.addEventListener('click',()=>{
        cardContainer.classList.add('hide')
        moviesContainer.classList.add('hide')
        sportsContainer.classList.remove('hide')
        getSportsData()
    })

    cardd.appendChild(buttonhome)
    cardd.appendChild(button1)
    cardd.appendChild(button2)
    cardd.appendChild(button3)

    navigationBar.appendChild(cardd)

}



function createCard(apiData){
    console.log(apiData)
    

        apiData.forEach((product) =>{
            const card = document.createElement('div')
            card.classList.add('card')


            const image = document.createElement('img')
            image.src = product.urlToImage
        
            const heading3 = document.createElement('h3')
            heading3.innerHTML = product.source.name

            const para = document.createElement('p')
            para.innerHTML = product.description

            card.appendChild(image)
            card.appendChild(heading3)
            card.appendChild(para)

            cardContainer.appendChild(card)
    
})  
}


function getSportsData(){
    console.log("hello")

    fetch('https://newsapi.org/v2/everything?q=sports&apiKey=f057be5199a5434ca44f8fdcaa8852d1')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);

        SportsCard(data.articles)
      
    })
}

function SportsCard(apiData){
    // console.log(apiData)
    console.log("sports")

        apiData.forEach((product) =>{
            const card = document.createElement('div')
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = product.urlToImage
        
            const heading3 = document.createElement('h3')
            heading3.innerHTML = product.source.name

            const para = document.createElement('p')
            para.innerHTML = product.description

            card.appendChild(image)
            card.appendChild(heading3)
            card.appendChild(para)

            sportsContainer.appendChild(card)
    
})  
}

function getMoviesData(id){

    fetch('https://newsapi.org/v2/everything?q=movies&apiKey=f057be5199a5434ca44f8fdcaa8852d1')
    .then(response =>{
        return response.json();
    }).then(data =>{
        console.log(data);

        MoviesCard(data.articles)
      
    })
}



function MoviesCard(apiData){
    // console.log(apiData)
    console.log("moviesssssssssss")

        apiData.forEach((product) =>{
            const card = document.createElement('div')
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = product.urlToImage
        
            const heading3 = document.createElement('h3')
            heading3.innerHTML = product.source.name

            const para = document.createElement('p')
            para.innerHTML = product.description

            card.appendChild(image)
            card.appendChild(heading3)
            card.appendChild(para)

            moviesContainer.appendChild(card)
    
})  
}

// getApiData()
// getMoviesData()
// getSportsData()


// function MoviesCard(apiData){
//     // console.log(apiData)
//     console.log("m")

//         apiData.forEach((product) =>{




//              const card = document.createElement('div')
//          card.classList.add('card')
//          card.innerHTML=`
//          <img src=${product.urlToImage} alt="no-img"/>
//          `

//             // const image = document.createElement('img')
//             // image.src = product.urlToImage
        
//             // const heading3 = document.createElement('h3')
//             // heading3.innerHTML = product.source.name

//             // const para = document.createElement('p')
//             // para.innerHTML = product.description

//             // card.appendChild(image)
//             // card.appendChild(heading3)
//             // card.appendChild(para)

//             moviesContainer.appendChild(card)
    
// })  
// }

