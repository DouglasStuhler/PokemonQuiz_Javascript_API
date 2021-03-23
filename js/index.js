//constante com o link da API
const linksUrls = "https://pokeapi.co/api/v2/pokemon/";



//elemento de impressão
function elemento(classe){
    return document.getElementsByClassName(classe)[0];
}

var localMensagem = elemento("pokemon");

var pokeName = parseInt(Math.random()*19) + 1;
var pokemon;


//pegando dados da API FUNÇÂO
function pegaInfoPoke(url, nome){
    fetch(url + nome)
        .then(response => response.json())
        .then(data => {
            pokemon = data;
        })
        .catch(err => console.log(err));
}

function info(pokemonInfo){
    if (pokemonInfo === undefined){
        html = "Aguarde alguns segundos, conexão instável!";
        setTimeout(function(){
            html = "<img class='pokeimagem' src='" + pokemonInfo.sprites.front_default + "' alt='" + pokemonInfo.name + "'>";
            return html;
        }, 100)
    }
    html = "<img class='pokeimagem' src='" + pokemonInfo.sprites.front_default + "' alt='" + pokemonInfo.name+ "'>";
    return html;
}

pegaInfoPoke(linksUrls, pokeName);
localMensagem.innerHTML = "<h1>Aguarde um momento!</h1>";
setTimeout(function(){
    localMensagem.innerHTML = info(pokemon);
}, 500);


//criando função verifica
function verifica(){
    var x = document.getElementById("input");
    var y = pokemon.name;
    var box = document.getElementById("resposta");

    x = x.value.trim();
    x = x.toLowerCase();

    if (x == y){
        box.innerHTML = "<p>Parabéns! Você acertou o nome do Pokemon!</p><a class='sucesso' href='index.html'>Aperte aqui para acertar mais uma!</a>"
    } else {
        box.innerHTML = "<p>Infelizmente você errou... O nome dele é: " + pokemon.name + "</p><a class='falha' href='index.html'>Clique aqui para tentar denovo!</a>";
    }

    return false;

}