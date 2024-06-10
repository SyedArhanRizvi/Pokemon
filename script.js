let cardsCont = document.querySelector(".cards");
let pokemonCard = document.querySelector(".pcard");
let pcard2 = document.querySelector(".pcard2");
// let cardv = document.querySelector(".")

async function addPokemons(i){
    let raw = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let data = await raw.json();
    return data;
}

async function fetchPokemon() {
    for(let i=1; i<50; i++) {
        let pokeMon = await addPokemons(i);
        let pCard = document.createElement("div");
        pCard.classList.add("pcard");
        pCard.innerHTML = `
        <div class="id">${pokeMon.id}</div>
        <div class="pimg"><img src='${pokeMon.sprites.front_default}'/></div>
        <div class="name">${pokeMon.name}</div>
        <div class="button">${pokeMon.types[0].type.name}</div>

        `;
        cardsCont.appendChild(pCard);
        
        pCard.addEventListener("click", ()=>{
            pcard2.innerHTML = "";
            pCard.innerHTML = `
            <div class="pimg"><img src='${pokeMon.sprites.front_default}'/></div>
            <div class="name">${pokeMon.name}</div>
            <div class="button">Remove</div>
    
            `;
            pcard2.appendChild(pCard);
        })
    }
    
}

window.addEventListener("load", fetchPokemon);
