class Api {
    static urlBase = "https://api-blog-m2.herokuapp.com/"

    static criarUsuario (data) {
        const URL = `${this.urlBase}user/register`

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) =>{
            return response.json();
        })
        .then((response)=>{
            console.log('Usuario Cadastrado', response)
        })
        .catch((err)=>{
            console.log(err, "Erro!")
        })
    }

    static logarUsuario (data) {
        const URL = `${this.urlBase}user/login`

        fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response)=>{
            return response.json()
        })
        .then((response)=>{
            localStorage.setItem("Token", response.token)
            localStorage.setItem("Id", response.userId)
            console.log("Logado", response)
        })
        .catch((err)=>{
            console.log('Senha Invalida', err)
        })
        ///vai receber no response o usuario o token
    }
}

export default Api