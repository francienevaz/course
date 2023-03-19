let fs = require('fs');

fs.writeFile('helloWorld.txt', 'Hello World', function(e){
    if(e) {
        throw e;
    }

    console.log("Arquivo gerado com sucesso!")
})