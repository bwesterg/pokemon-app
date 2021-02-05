const pokemonContainer = document.querySelector('.pokemon-container');

pokemons = [
    {
        "id": 1,
        "name": "bulbasaur",
        "sprites": {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            }
        },
    },
    {
        "id": 2,
        "name": "ivysaur",
        "sprites": {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
            }
        }
    },
    {
        "id": 3,
        "name": "venusaur",
        "sprites": {
            "official-artwork": {
                "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
            }
        },
    }
]

displayPokemons(pokemons);

function displayPokemons(pokemons) {
    pokemons.forEach(pokemon => showPokemon(pokemon));
}

function showPokemon(pokemon) {
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon-card');

    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemon.sprites["official-artwork"].front_default;

    pokemonCard.append(pokemonName, pokemonImage);
    pokemonContainer.append(pokemonCard);
    
}