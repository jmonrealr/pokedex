const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://th.bing.com/th/id/R.06b0c0c019df8e704121283950fa492e?rik=8Ui0dBOp0LjD9g&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fuWPGqy4rkgllS%2fgiphy.gif&ehk=8q5dtCgCrUFdU4qVoLXShPfNOxeIRgtYL5NTQS92CCU%3d&risl=&pid=ImgRaw&r=0")
            setName('Not found!!')
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            let name = data.species.name;
            // console.log(pokeImg);
            setName(name);
            setAbilities(data.abilities)
            setType(data.types)
            setStats(data.stats)
            setMoves(data.moves)
        }
    });
}

function setType(type) {
    document.getElementById("type").innerHTML = "<h2> Type </h2>"
    type.forEach( function (item, index) {
        document.getElementById("type").innerHTML +=item.type.name + "<br>";
    });

}

function setStats(stats) {
    document.getElementById("stats").innerHTML = "<h2> Stats </h2>"
    stats.forEach( function (item, index) {
        document.getElementById("stats").innerHTML += item.stat.name + " = " + item.base_stat + "<br>";
    });
}

function setName(name) {
    const header = document.getElementById("name");
    header.innerHTML = name;
}

function setMoves(moves) {
    document.getElementById("moves").innerHTML = "<h2> Movements </h2>"
    moves.forEach( function (item, index) {
        document.getElementById("moves").innerHTML += item.move.name + "<br>";
    });
}

function setAbilities(abilities) {
    document.getElementById("abilities").innerHTML = "<h2> Abilities </h2>"
    abilities.forEach( function (item, index) {
        document.getElementById("abilities").innerHTML +=item.ability.name + "<br>";
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

let field = document.getElementById("pokeName");
field.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});