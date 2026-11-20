
async function mostrar() {
    try {
        const pokemon = document.getElementById("pokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok) {
            throw new Error("Não foi capaz de achar");
        }

        const dados = await response.json();

        const pokemonSprite = dados.sprites;
        const pokemonSprite2 = dados.sprites.front_default;

        const img2 = document.getElementById("pokemonN");
        const img2P = document.getElementById("pokemonN").classList;

        const img = document.getElementById("pokemonS");

        console.log(pokemonSprite);
        console.log(dados);

        img2.innerHTML = "";

        if (img2P.contains("d-none")) {
            img2P.remove("d-none");
            img2P.add("d-flex");
        }

        img2.innerHTML += `
            <div class="card p-3 animation-pop">
            <img src="${dados.sprites.front_shiny}" class=" hover-lift w-10 border rounded">
            <p>${dados.species.name} shiny</p>
            </div>
            `
        img2.innerHTML += `
            <div class="card p-3 animation-pop">
            <img src="${dados.sprites.front_default}" class="hover-lift w-10 border rounded">
            <p>${dados.species.name} normal</p>
            </div>
            `


    } catch {
        alert("Nao encontrado");
    }

}
