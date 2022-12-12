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

function createCardsFromHogwarts (characters) {
    let cards = [];

    for(let character of characters){
        cards.push(createPairFromHogwarts(character))
    }
}

function createPairFromHogwarts(character){

    return [{
        id: createIdWithCharacter(character),
    }, {

    }]
}