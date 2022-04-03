// var nome = prompt("Welcome, How's it going? What's your name?");

// alert(`Nice to meet you ${nome}! I hope you enjoy it, Let's go to learning JavaScript! `);

function idade() {
    var id = document.getElementById('idade');
    var res = document.getElementById('result')
    if (id.value >= 18) {
        res.innerHTML=`Você tem ${id.value} anos! Está liberado para beber!`;
    } else if (id.value < 18) {
        res.innerHTML=`Você tem ${id.value} anos! Ainda não pode beber, volte quando tiver 18 anos!`
    }
}