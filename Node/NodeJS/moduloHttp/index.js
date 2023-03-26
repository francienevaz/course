const http = require('http');

http.createServer((resquest, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end("Hello World!");
}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor rodando na porta 3000")
    }
})