import DisplayCreatePost from "../models/DisplayCreatePost.js";
import EditarPost from "../models/EditarPost.js";
import Modal from "../models/Modal.js";
import Posts from "../models/Posts.js";

class Api {
    static urlBase = "https://api-blog-m2.herokuapp.com/"

    static criarUsuario(data) {
        const URL = `${this.urlBase}user/register`

        fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                Modal.showLoginModal();
            })
            .catch((err) => {
                console.log(err, "Erro!")
            })
    }

    static logarUsuario(data) {
        const URL = `${this.urlBase}user/login`

        fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                localStorage.setItem("Token", response.token);
                localStorage.setItem("Id", response.userId);
                Modal.closeModal();
                this.listarUsuario();
                this.allPosts();
            })
            .catch((err) => {
                console.log('Senha Invalida', err)
            })
    }

    static async listarUsuario() {
        const URL = `${this.urlBase}user/${localStorage.getItem("Id")}`

        await fetch(URL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("Token")}`
                }
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                if(response.username){
                    DisplayCreatePost.createPost();
                    Modal.headerLogin(response);
                }
            })
            .catch((err) => {
                console.log('moio', err)
            })
    }

    static criarPost(data) {
        const URL = `${this.urlBase}post`

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            console.log(response)
        })
    }

    static allPosts () {
        const URL = `${this.urlBase}post`

        fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            Posts.selecionarPagina(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    static async pagePost (page) {
        const URL = `${this.urlBase}post?page=${page}`
        const userId = localStorage.getItem("Id")
        await fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((response) => {
            Posts.DisplayPosts(response, userId)
        })
         .catch((err) => {
             console.log(err)
         })
    }

    static listarPost (id) {
        const URL = `${this.urlBase}post/${id}`

        fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            EditarPost.editarPost(response)
        })
    }

    static editarPost (id, data) {
        const URL = `${this.urlBase}post/${id}`

        fetch(URL, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            return response.json();
        })
        .then(()=>{
            Posts.DisplayPosts(1)
        })
    }

    static deletePost(postId) {
        const URL = `${this.urlBase}post/${postId}`

        fetch(URL, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then((response)=>{
            // console.log(response)
        })
        .catch(err => console.log(err))
    }

}

export default Api