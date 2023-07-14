document.addEventListener("DOMContentLoaded", () => {
    updatePosts();
})

function updatePosts() {

    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then( json => {
        let postElements = "";

        let posts = JSON.parse(json);
        // converte a resposta que a api manda em JSON para Objeto ☝🏻☝🏻

        posts.forEach((post) => {
            let postElement = ``
        });
    })
}

function newPost() {

}