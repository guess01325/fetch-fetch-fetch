const body = document.querySelector('body');
console.log(body)


fetch(' https://pokeapi.co/api/v2/pokemon/charizard')
.then(response =>{
    //console.log(response);
    return response.json();
})
.then(data =>{
    //console.log(data);
    let sprites = data.sprites; 
    //console.log(sprites);

    let profilePic = sprites.front_default
    console.log(profilePic);
    let pokeName = data.name;
    //console.log(pokeName);

    let height = data.height; 
    let weight = data.weight;
   // console.log(height);    
     
    let moves = data.moves
    //console.log(moves);

    let fireSpin = moves[25].move.name;
    //console.log(fireSpin);

    let type = data.types[0].type.name;
    //console.log(type);

const card = document.createElement('div');
card.classList.add('card');
card.style.width = '18rem'; 
console.log(card);

const image = document.createElement('img');
image.src = profilePic; 
image.classList.add('card-img-top');
image.alt = pokeName;

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');
console.log(cardBody);

let firstLetter = pokeName.charAt(0).toUpperCase();
let otherLetter = pokeName.slice(1);
let finaleName = firstLetter + otherLetter; 

const cardTitle = document.createElement('h5');
cardTitle.classList.add('card-title');
cardTitle.textContent = pokeName;
//console.log(cardTitle);


const cardWeight = document.createElement('p');
const cardHeight = document.createElement('p');
const cardMove = document.createElement('p');
const cardType = document.createElement('p');

cardWeight.classList.add('card-text');
cardHeight.classList.add('card-text');
cardMove.classList.add('card-text');
cardType.classList.add('card-text');

cardWeight.textContent = "weight: " +weight;
cardHeight.textContent = "height: " +height;
cardMove.textContent = "move:  " + fireSpin;
cardType.textContent = "type" + type; 

console.log(cardWeight);
console.log(cardHeight);
console.log(cardMove);
console.log(cardType);

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardWeight);
cardBody.appendChild(cardHeight);
cardBody.appendChild(cardMove);
cardBody.appendChild(cardType);


card.appendChild(image);
card.appendChild(cardBody);

console.log(card);

body.appendChild(card);

})