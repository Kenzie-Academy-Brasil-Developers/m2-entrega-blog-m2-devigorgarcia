import Api from "../Controller/Api.js"

class Modal {

    static handlerClick() {
        const loginBtn = document.querySelector('#header__buttons__login')
        const registerBtn = document.querySelector('#header__buttons__register')
        const register = document.querySelector('.modal__submitBtn')

        loginBtn.addEventListener('click', () => {
            Modal.showLoginModal()
        })

        registerBtn.addEventListener('click', Modal.showRegisterModal)
    }

    static showLoginModal() {

        const section = document.createElement('section');
        const form = document.createElement('form');
        const body = document.querySelector('body')
        const closeBtn = document.createElement('button');
        const h1 = document.createElement('h1');
        const emailInput = document.createElement('input');
        const senhaInput = document.createElement('input');
        const btnInput = document.createElement('input');

        section.classList.add('modal');
        form.classList.add('modal__cadastro');
        closeBtn.classList.add('modal__closeBtn');
        h1.classList.add('modal__title');
        emailInput.classList.add('modal__input');
        senhaInput.classList.add('modal__input');
        btnInput.classList.add('modal__submitBtn');

        emailInput.type = "email"
        senhaInput.type = "password"

        emailInput.name = "email";
        senhaInput.name = "password";

        emailInput.placeholder = "Email";
        senhaInput.placeholder = "Senha";

        btnInput.type = "submit";
        btnInput.value = "Login";

        closeBtn.addEventListener('click', Modal.closeModal)

        btnInput.addEventListener('click', (e) => {
            e.preventDefault()
            Modal.login(form)
        })

        closeBtn.innerText = "X"
        h1.innerText = "Login"

        form.append(closeBtn, h1, emailInput, senhaInput, btnInput);
        section.appendChild(form)
        body.appendChild(section)

    }

    static showRegisterModal() {
        const section = document.createElement('section');
        const form = document.createElement('form');
        const body = document.querySelector('body')

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

        nameInput.type = "text"
        emailInput.type = "email"
        avatarInput.type = "text"
        senhaInput.type = "password"

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

    static closeModal() {
        const modal = document.querySelector('.modal')
        modal.innerHTML = ""
        modal.classList.remove('modal')
    }

    static headerLogin(usuario) {
        const header = document.querySelector('#header');
        header.innerHTML = ""

        const divUser = document.createElement('div');
        const imgUser = document.createElement('img');
        const nickUser = document.createElement('h1');
        const divButton = document.createElement('div');
        const logoutButton = document.createElement('button');

        divUser.classList.add('header__logo');
        imgUser.id = 'header__logo__userImg';
        nickUser.id = 'header__logo__user';
        divButton.classList.add('header__buttons');
        logoutButton.classList.add('header__button');

        imgUser.src = usuario.avatarUrl;
        nickUser.innerText = usuario.username;
        logoutButton.innerText = "Logout";

        divUser.append(imgUser, nickUser);
        divButton.appendChild(logoutButton);

        header.append(divUser, divButton);
    }


    static cadastro(form) {
        const inputs = [...form]
        const data = {}

        inputs.forEach((input) => {
            if (!input.name == "") {
                data[input.name] = input.value
            }
        })

        Api.criarUsuario(data)
    }

    static login(form) {
        const inputs = [...form];
        const data = {};

        inputs.forEach((input) => {
            if (!input.name == "") {
                data[input.name] = input.value;
            }
        })
        Api.logarUsuario(data)
    }
}

export default Modal