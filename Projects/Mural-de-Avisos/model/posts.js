module.exports = {

    posts: [
        {
            id: "dfjknkkjfg",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({id: generateID(), title, description})
    }
}

function generateID() {
    return Math.random().toString(36).substring(2,9);
    // no método toString(36) retorna números e letras do random. E o substring limita a quantidade de caracters
}