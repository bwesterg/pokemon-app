const baseURL = "http://localhost:3000";
const pokemonsURL = `${baseURL}/pokemons`;

const pokemonContainer = document.querySelector('.pokemon-container');



fetch(pokemonsURL)
    .then(parseJSON)
    .then(displayPokemons);

function displayPokemons(pokemons) {
    pokemons.forEach(showPokemon);

    removeLoadingGif();
}

function removeLoadingGif() {
    const loading = document.querySelector('.loading');
    loading.remove();
}

function showPokemon(pokemon) {
    const pokemonCard = createPokemonCard();
    const pokemonName = createPokemonName(pokemon);
    const pokemonImage = createPokemonImage(pokemon);

    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);
}

function createPokemonCard() {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');
    return pokemonCard;
}

function createPokemonName({ name }) {
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = name;
    return pokemonName;
}

function createPokemonImage({ sprites }) {
    const pokemonImage = document.createElement('img');
    pokemonImage.src = sprites.other["official-artwork"].front_default;
    return pokemonImage;
}

function parseJSON(response) {
    return response.json();
}