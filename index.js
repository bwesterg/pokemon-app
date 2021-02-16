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
    const pokemonCard = createPokemonCard(pokemon);
    const pokemonName = createPokemonName(pokemon);
    const pokemonImage = createPokemonImage(pokemon);

    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);   
}
 
function createPokemonCard(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    pokemonCard.addEventListener('click', () => {
     const selectedPokemonImage = document.querySelector('.selected-pokemon > img');
     selectedPokemonImage.src = pokemon.sprites.other["official-artwork"].front_default;
     selectedPokemonImage.alt = pokemon.name;

     const selectedPokemonName = document.querySelector('.pokemon-info > h2');
     selectedPokemonName.textContent = pokemon.name;

     const selectedPokemonTypes = document.querySelector('.types');
     selectedPokemonTypes.innerHTML = '';
     pokemon.types.forEach(type => {
         const typeDisplay = document.createElement('li');
         typeDisplay.textContent = type.type.name;
         selectedPokemonTypes.append(typeDisplay);
     });

     const selectedPokemonStats = document.querySelector('.stats');
     selectedPokemonStats.innerHTML = '';
     for (let i = 0; i < 3; i++) {
         const statWrapper = document.createElement('li');
         
         const statName = document.createElement('p');
         statName.classList.add('stat-name');
         statName.textContent = pokemon.stats[i].stat.name;

         const statValue = document.createElement('p');
         statValue.classList.add('stat-value');
         statValue.textContent = pokemon.stats[i].base_stat;

         statWrapper.append(statName, statValue);
         selectedPokemonStats.append(statWrapper);
     }
    

    const selectedPokemonAbilities = document.querySelector('.abilities');
    selectedPokemonAbilities.innerHTML = '';
    pokemon.abilities.forEach(ability => {
        const abilityDisplay = document.createElement('li');
        abilityDisplay.textContent = ability.ability.name;
        selectedPokemonAbilities.append(abilityDisplay);
    });

    const selectedPokemon = document.querySelector('.selected-pokemon');
    selectedPokemon.classList.remove('hidden'); 
  });

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