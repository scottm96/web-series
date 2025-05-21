//fetch  used to make http request to fetch resource
//  used to interact with api
//fetch(url,{options})

async function fetchData() {

    try{

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/gengar")

        if(!response.ok){
            throw new Error("cannot retrieve data")
        }

        const data = await response.json()
        console.log(data)

    }
    catch(e){
        console.log(e)
    }
    
}

fetchData()