// Carne - 400gr por pessoa + de 6 horas - 650gr
// Cerveja - 1200ml por pessoa +  de 6 horas - 2000ml
// Refrigerante/Água - 1000ml por pessoa + de 6 horas 1500ml

// crianças valem por 0,5 pessoa

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let result = document.getElementById("resultado");

function calcular () {
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);

    result.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne</p>`;
    result.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/ 350)} latas de Cerveja</p>`;
    result.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de Bebidas</p>`;
}

function carnePP(duracao) {
    let carne = 400;
    if(duracao >= 6) {
        carne = 650;
    }
    return carne;
}

function cervejaPP(duracao) {
    let cerveja = 1200;
    if(duracao >= 6) {
        cerveja = 2000;
    }
    return cerveja;
}

function bebidasPP(duracao) {
    let bebidas = 1000;
    if(duracao >= 6) {
        bebidas = 1500;
    }
    return bebidas;
}