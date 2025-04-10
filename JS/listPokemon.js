$(document).ready(function(){

    // array donde se irán guardando los Pokémon de forma ordenada por ID
    let sortedPokemon = [];
    
    // Primera llamada a la API para conseguir el listado
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            //console.log(result);
            let pokemonList = result.results;
            
            //Lanzamos una nueva petición a la API para cada Pokémon del listado que hemos recibido.
            pokemonList.forEach(function(pokemon){
                fetchAndSortPokemon(pokemon);
            });
        })
        .catch(function(err){
            console.log(err);
        });

        // Función que pide a la API los datos de un Pokémon y los va ordenando en un array
        function fetchAndSortPokemon(pokemon){
            let urlPokemon = pokemon.url;

            // Con esta llamada pedimos los detalles de cada Pokémon
            fetch(urlPokemon)
                .then(function(response){
                    return response.json();
                })
                .then(function(pokemonDetails){
                    console.log(pokemonDetails);
                    
                    // Insertamos el Pokémon con sus datos en el array sortedPokemon
                    sortedPokemon.push(pokemonDetails);
                    sortedPokemon.sort(function(a,b){
                        return a.id-b.id;   // Ordenar por ID en orden ascendente.
                    })

                    // Llamamos a la función para renderizar el HTML de cada card
                    renderPokemonCard();
                })
                .catch(function(err){
                    console.log(err);
                });
        }

        // Función para renderizar los datos de cada Pokémon en un car de BS
        // Esta función recorrerá el array sortedPokemon
        function renderPokemonCard(){
            $("#pokeCont").empty();

            sortedPokemon.forEach(function(pokemonDetails){
                let pokeHTML =`
                    <div class="card" style="width: 18rem;">
                        <img src="${pokemonDetails.sprites.front_default}" class="card-img-top"     alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${pokemonDetails.name}</h5>
                            <p class="card-text">${pokemonDetails.id}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
            `;

                $("#pokeCont").append(pokeHTML);
            });
        }


        // Función que se encarga de pedir los datos de cada Pokémon
        function fetchPokemonDetails(pokemon){
            let urlPokemon = pokemon.url;

            // Con esta llamada pedimos los detalles de cada Pokémon
            fetch(urlPokemon)
                .then(function(response){
                    return response.json();
                })
                .then(function(pokemonDetails){
                    console.log(pokemonDetails);
                    
                    let pokeHTML =`
                        <div class="card" style="width: 18rem;">
                            <img src="${pokemonDetails.sprites.front_default}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${pokemonDetails.name}</h5>
                                <p class="card-text">${pokemonDetails.id}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    `;

                    console.log($("#pokeCont"));
                    
                    
                    $("#pokeCont").append(pokeHTML);
                })
                .catch(function(err){
                console.log(err);
                });
        }
});