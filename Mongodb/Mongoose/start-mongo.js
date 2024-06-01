const { exec } = require('child_process');

// Inicia o MongoDB
const startMongo = exec('mongod', (err, stdout, stderr) => {
    if (err) {
        console.error(`Erro ao iniciar o MongoDB: ${err.message}`);
        return;
    }
    console.log(`MongoDB iniciado:\n${stdout}`);
});

// Mata o processo do MongoDB quando a aplicação termina
process.on('exit', () => {
    startMongo.kill();
});

// Inicia a aplicação após um breve atraso para garantir que o MongoDB tenha tempo de inicializar
setTimeout(() => {
    exec('node index.js', (err, stdout, stderr) => {
        if (err) {
            console.error(`Erro ao iniciar a aplicação: ${err.message}`);
            return;
        }
        console.log(`Aplicação iniciada:\n${stdout}`);
    });
}, 5000); // Ajuste o tempo conforme necessário
