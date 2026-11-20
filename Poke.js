
async function mostrar(){
    try{
        const pokemon = document.getElementById("pokemon").value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if(!response.ok){
            throw new Error("Não foi capaz de achar");
        }

        const dados = await response.json();
        
        const pokemonSprite= dados.sprites.front_shiny;
        const pokemonSprite2= dados.sprites.front_default;
        const img2= document.getElementById("pokemonN");
        const img= document.getElementById("pokemonS");

        img.src=pokemonSprite2;
        img.style.display="block";
        
        img2.src=pokemonSprite;
        img2.style.display="block";

    }catch{
        console.error(error);
    }

}