async function getPokemonData() {
    const input = document.getElementById('input').value
    if (!input) {
        alert('Please Enter a Pokemon Name!')
        return
    }

    const URL = `https://pokeapi.co/api/v2/pokemon/${input}`

    try {
        const response = await fetch(URL);
        const data = await response.json();
        const pokemonImg = data.sprites.other.dream_world.front_default
        const pokemonHeight = data.height
        const pokemonWeight = data.weight
        const pokemonId = data.id


        document.getElementById('pokemon-img').src = pokemonImg
        document.getElementById('name').innerText = input
        document.getElementById('number').innerText = pokemonId
        document.getElementById('height').innerText = pokemonHeight
        document.getElementById('weight').innerText = pokemonWeight


    } catch (err) {
        console.log(`Error! Pokemon not found  ${err}`);
    }

}

