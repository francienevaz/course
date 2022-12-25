const  FRONT = "card_front";
const BACK = "card_back";

let hogwarts = [
    'dumbledore',
    'harry',
    'rony',
    'hermione',
    'voldemort',
    'óculos',
    'snape',
    'chapéu seletor',
    'dobby',
    'patrono'
];

createCardsFromHogwarts(hogwarts)
function createCardsFromHogwarts (characters) {
    let cards = [];

    for(let character of characters){
        cards.push(createPairFromHogwarts(character))
    }

    return cards.flatMap(pair => pair);
}

function createPairFromHogwarts(character){

    return [{
        id: createIdWithCharacter(character),
        icon: character,
        flipped: false,
    }, {
        id: createIdWithCharacter(character),
        icon: character,
        flipped: false,
    }]
}

function createIdWithCharacter(character) {
    return character + parseInt(Math.random() * 1000);
}