import Api from "../Controller/Api.js";

class EditarPost {

    static editarPost(post) {
        console.log(post)
        const createPost = document.querySelector('.createPost')

        const main = document.querySelector('main')
        const section = document.createElement('section')

        const divCard = document.createElement('div');
        const divImg = document.createElement('div')
        const imgCard = document.createElement('img');
        const divContent = document.createElement('div')
        const spanContent = document.createElement('span');
        const pContent = document.createElement('p');
        const divBtn = document.createElement('div');
        const divEditPost = document.createElement('div');
        const editTextArea = document.createElement('textarea');
        const editSubmitBtn = document.createElement('button');

        section.classList.add('posts')
        divCard.classList.add('posts__card');
        divImg.classList.add('posts__card__imgContainer');
        imgCard.classList.add('posts__card__img');
        divContent.classList.add('posts__card__content');
        spanContent.classList.add('posts__card__content__nick');
        pContent.classList.add('posts__card__content__text');
        divEditPost.classList.add('createPost__post');
        editTextArea.classList.add('createPost__post__inputText');
        editSubmitBtn.classList.add('createPost__button');

        editTextArea.name = "post"
        editTextArea.cols = "30"
        editTextArea.rows = "30"
        editTextArea.placeholder = "Edite seu post incrivel!!"

        editSubmitBtn.type = "submit"

        imgCard.src = post.owner.avatarUrl;
        spanContent.innerText = post.owner.username;
        pContent.innerText = post.post;
        editSubmitBtn.innerText = "+"

        editSubmitBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const newText = {
                newContent: editTextArea.value
            }
            
            Api.editarPost(post.id, newText)
        })

        divImg.appendChild(imgCard);
        divContent.append(spanContent, pContent);
        divCard.append(divImg, divContent, divBtn)
        section.appendChild(divCard);
        divEditPost.append(editTextArea, editSubmitBtn)
        main.appendChild(section)
        main.appendChild(divEditPost)
    }
}

export default EditarPost