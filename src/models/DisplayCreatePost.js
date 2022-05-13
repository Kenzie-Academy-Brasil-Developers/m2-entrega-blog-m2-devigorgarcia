import Api from "../Controller/Api.js";

class DisplayCreatePost {
    static createPost() {
        const section = document.querySelector('.createPost');

        const divCreatePost = document.createElement('div');
        const textArea = document.createElement('textarea');
        const submitBtn = document.createElement('button');

        section.classList.add('createPost');
        divCreatePost.classList.add('createPost__post');
        textArea.classList.add('createPost__post__inputText');
        submitBtn.classList.add('createPost__button');

        textArea.name = "post"
        textArea.cols = "30"
        textArea.rows = "30"
        textArea.placeholder = "Comece seu post incrivel!!"

        submitBtn.innerText = "+"
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const textPost = {
                content: textArea.value
            }
            Api.criarPost(textPost)
        })
        divCreatePost.append(textArea, submitBtn)
        section.appendChild(divCreatePost);
    }
}



export default DisplayCreatePost