let game = {

    hogwarts: [
        'dumbledore',
        'harry',
        'rony',
        'hermione',
        'youKnowWho',
        'luna',
        'snape',
        'chapeuSeletor',
        'dobby',
        'patrono'],

    cards: null,

    createCardsFromHogwarts: function () {
        this.cards = [];
    
        game.hogwarts.forEach((character) => {
            this.cards.push(this.createPairFromHogwarts(character));
        })
        // for(let character of characters){
        //     cards.push(createPairFromHogwarts(character))
        // }
    
        this.cards = this.cards.flatMap(pair => pair);
        this.shuffleCards();
        return this.cards;
    },
    
    createPairFromHogwarts: function (character){
    
        return [{
            id: this.createIdWithCharacter(character),
            icon: character,
            flipped: false,
        }, {
            id: this.createIdWithCharacter(character),
            icon: character,
            flipped: false,
        }]
    },
    
    createIdWithCharacter: function (character) {
        return character + parseInt(Math.random() * 1000);
    }, 

    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0) {
    
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
    
        }
    }
    

}