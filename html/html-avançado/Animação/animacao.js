console.log("working...");

let jogador = document.getElementById("jogador");

let xInicial = 0;
let yInicial = 0;

function moverJogador (X, Y) {

    let posX = X + "px";
    let posY = Y + "px";

   jogador.style.top = posX;
   jogador.style.left = posY; 
}
    setInterval(function(){

        moverJogador(xInicial++, yInicial++);
        
    }, 14);
