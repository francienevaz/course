// "DomContentLoaded" para verificar se o conteúdo da pág está carregado e só assim chama a função updatedPosts()
document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts() {
    // o método fetch pega os dados do backend, "api" para conseguirmos passar os dados para o frontend
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then( json => {
        let postElements = "";

        let posts = JSON.parse(json);
        // converte a resposta que a api manda em JSON para Objeto ☝🏻☝🏻

        posts.forEach((post) => {
            let postElement = `
            <div id=${post.id} class="card mb-4">
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                    <div class="card-body">
                        <div class="card-text">${post.description}</div>
                    </div>
                </div>
            </div>`
            postElements += postElement
        });

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {

}