//fetch  used to make http request to fetch resource
//  used to interact with api
//fetch(url,{options})


async function fetchData() {

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase()

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        

        if(!response.ok){
            throw new Error("could not retrieve data")
        }

        const data = await response.json()
        const pokemonSprite = data.sprites['front_default'];
        const imgE = document.getElementById("pokemonSprite");

        imgE.src = pokemonSprite;
        imgE.style.display = 'block';

    }
    catch(error){
        console.log(error)
    }
    
}