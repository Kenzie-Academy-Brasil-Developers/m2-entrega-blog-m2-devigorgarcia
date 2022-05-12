import DisplayPosts from "../models/DisplayPosts.js";
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
                console.log('Usuario Cadastrado', response)
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
                Modal.headerLogin(response);
                DisplayPosts.createPost();
            })
            .catch((err) => {
                console.log('moio', err)
            })
            .catch((err)=>console.log(err))
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

        await fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("Token")}`
            }
        })
        .then((response)=>{
            return response.json();
        })
        .then((reposnse)=>{
            Posts.DisplayPosts(reposnse)
        })
         .catch((err) => {
             console.log(err)
         })
    }
}

export default Api