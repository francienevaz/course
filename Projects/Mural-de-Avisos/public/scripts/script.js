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
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = {title, description};

    const options = {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => {
        console.log(res);
        updatePosts();
        document.getElementById("title").value = "";
        document.getElementById("desc").value = "";
    })
}