import Modal from "./models/Modal.js";

const loginBtn = document.querySelector('#header__buttons__login')
const registerBtn = document.querySelector('#header__buttons__register')


loginBtn.addEventListener('click', () => {
    Modal.showLoginModal()
})

registerBtn.addEventListener('click', Modal.showRegisterModal)

// registerSubmit.addEventListener('click', (e)=>{
//     e.preventDefault();
//     Modal.cadastro(registerForm);
// })

// loginBtn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     Modal.login(loginForm)
// })
