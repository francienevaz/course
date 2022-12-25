const  FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = 'icon'

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

let cards = null;

startGame();

function startGame() {
    cards = createCardsFromHogwarts(hogwarts);
    shuffleCards(cards);
    initializeCards(cards);
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");

    cards.forEach( card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })

}

function createCardContent (card, cardElement) {
        createCardFace(FRONT, card, cardElement);
        createCardFace(BACK, card, cardElement);
}

function createCardFace (face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);

    if(face === FRONT){

        let iconElement = document.createElement('img');

        iconElement.classList.add(ICON);
        iconElement.src = "/Projects/Jogo-da-Memoria/imgs/" + card.icon + ".png" ;
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = '&lt/&gt';
    }

    element.appendChild(cardElementFace);

}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]

    }
}


function createCardsFromHogwarts (characters) {
    let cards = [];

    characters.forEach((character) => {
        cards.push(createPairFromHogwarts(character));
    })
    // for(let character of characters){
    //     cards.push(createPairFromHogwarts(character))
    // }

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

function flipCard() {

    this.classList.add("flip");
}