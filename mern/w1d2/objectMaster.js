const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// pokemon.push("magical unicorns");

console.log(pokemon);

let x = () => { console.log("Hello world!") };

let y = [() => {}, () => {}];

y[0]();

let caller = (callback) => {
    callback();
}

caller(() => {console.log("Hello world again!")});

// first order fuctions
// functions as first class citizens

function multiplyNumbers(nums, multiplier){
    const newNumbers = [];

    for(let i = 0; i < nums.length; i++){
        newNumbers.push(nums[i] * multiplier);
    }

    return newNumbers;
}

// console.log(multiplyNumbers([1, 2, 3, 4], 3));

var nums = [1, 2, 3, 4];

const newNums = nums.map(number => number - 1);
const newNums2 = nums.map(number => {
    if(number % 2 == 0){
        return number * 5
    }else {
        return number;
    }
})

const changedPokemon = pokemon.map(poke => {
    if(poke.id === 25){
        poke.name = "Awesome Pikachu";
    }

    return poke;
})

let digits = [1, 3, 7, 10, 13, 44, 99, 107, 151, 222];

function getOdds(nums){
    const odds = [];
    for(i=0; i<nums.length; i++){
        if(nums[i] % 2 !== 0){
            odds.push(nums[i])
        }
    }

    return odds;
}
// console.log(getOdds(digits));

const evens = digits.filter(num => num % 2 == 0);
console.log(evens);

const evenTest = (number) => number % 2 == 0;
const getEvens = digits.filter(evenTest);

const firePokemon = pokemon.filter(onePokemon => onePokemon.types.includes("fire"));
// const firePokemon = pokemon.filter(function(onePokemon){ return onePokemon.types.includes("fire")});
console.log(firePokemon);

const pokemonNames = pokemon.map(onePokemon => onePokemon.name.length);
console.log(pokemonNames);

const poisonPokemonNames = pokemon
                            .filter(onePokemon => onePokemon.types.includes("poison"))
                            .map(onePokemon => onePokemon.name);

console.log(poisonPokemonNames);

console.log(pokemon);

//        identifier
function exampleFunc(){
// body - behavior, logic
}

// functional programming