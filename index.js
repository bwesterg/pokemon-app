const baseURL = "http://localhost:3000";
const pokemonsURL = `${baseURL}/pokemons`;

const pokemonContainer = document.querySelector('.pokemon-container');



fetch(pokemonsURL)
    .then(response => response.json())
    .then(pokemons => displayPokemons(pokemons));


function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => showPokemon(pokemon));

    const loading = document.querySelector('.loading');
    loading.remove();
}

function showPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;

    console.log('pokemon', pokemon);

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;

    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);
    
}