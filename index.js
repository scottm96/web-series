//fetch  used to make http request to fetch resource
//  used to interact with api
//fetch(url,{options})

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => {

        if(!response.ok){
            throw new Error("could not retrieve data")
        }

        return response.json()

    })
    .then(data => console.log(data.abilities[1].ability['name']))
    .catch(error => console.error(error))