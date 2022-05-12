import Api from "../Controller/Api.js"

class Modal {
    

    static showLoginModal() {
        
    }

    static showRegisterModal() {
        const body = document.querySelector('body')
        
        const section = document.createElement('section');
        const form = document.createElement('form');
        const closeBtn = document.createElement('button');
        const h1 = document.createElement('h1');
        const nameInput = document.createElement('input');
        const emailInput = document.createElement('input');
        const avatarInput = document.createElement('input');
        const senhaInput = document.createElement('input');
        const btnInput = document.createElement('input');

        section.classList.add('modal');
        form.classList.add('modal__cadastro');
        closeBtn.classList.add('modal__closeBtn');
        h1.classList.add('modal__title');
        nameInput.classList.add('modal__input');
        emailInput.classList.add('modal__input');
        avatarInput.classList.add('modal__input');
        senhaInput.classList.add('modal__input');
        btnInput.classList.add('modal__submitBtn');

        nameInput.name = "username";
        emailInput.name = "email";
        avatarInput.name = "avatarUrl";
        senhaInput.name = "password";

        nameInput.placeholder = "Nome de usuário";
        emailInput.placeholder = "Email";
        avatarInput.placeholder = "Foto de perfil";
        senhaInput.placeholder = "Senha";

        btnInput.type = "submit";
        btnInput.value = "Cadastrar";
        
        closeBtn.addEventListener('click', Modal.closeModal)
        
        btnInput.addEventListener('click', (e) => {
            e.preventDefault()
            Modal.cadastro(form)
        })
        
        closeBtn.innerText = "X"
        h1.innerText = "Cadastrar"

        form.append(closeBtn, h1, nameInput, emailInput, avatarInput, senhaInput, btnInput);

        section.appendChild(form)

        body.appendChild(section)
        
    }

    static closeModal () {
        const modal = document.querySelector('.modal')
        modal.innerHTML = ""
        modal.classList.remove('modal')
    }

 
    static cadastro(form) {
        const inputs = [...form]
        const data = {}

        inputs.forEach((input)=>{
            if(!input.name == ""){
                data[input.name] = input.value
            }
        })
        
        Api.criarUsuario(data)
    }

    static login(form) {
        const inputs = [...form];
        const data = {};

        inputs.forEach((input)=>{
            if(!input.name == "") {
                data[input.name] = input.value;
            }
        })
        Api.logarUsuario(data)
    }
}

export default Modal