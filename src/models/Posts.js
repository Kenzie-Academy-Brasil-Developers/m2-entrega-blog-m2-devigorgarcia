import Api from "../Controller/Api.js";
import EditarPost from "./EditarPost.js";

class Posts {
    static selecionarPagina(listaPosts) {
        const main = document.querySelector('main')
        const footer = document.querySelector('footer')
        const section = document.createElement('section');
        
        section.classList.add('postPages');

        for(let i =1; i <= listaPosts.lastPage; i++){
            const pageBtn = document.createElement('button');

            pageBtn.id = i;
            pageBtn.classList.add('pageBtn');
            pageBtn.innerText = i;
            pageBtn.addEventListener('click', ()=>{
                main.innerHTML = ""
                Api.pagePost(i);
            })
            
            section.appendChild(pageBtn)
            footer.appendChild(section)
        }
    }

    static DisplayPosts(listaPosts, userId) {
        const main = document.querySelector('main')
        const section = document.createElement('section')
        
        listaPosts.data.forEach((post) => {
            const divCard = document.createElement('div');
            const divImg = document.createElement('div')
            const imgCard = document.createElement('img');
            const divContent = document.createElement('div')
            const spanContent = document.createElement('span');
            const pContent = document.createElement('p');
            const spanDate = document.createElement('span');
            const divBtn = document.createElement('div');
            
            section.classList.add('posts')
            divCard.classList.add('posts__card');
            divImg.classList.add('posts__card__imgContainer');
            imgCard.classList.add('posts__card__img');
            divContent.classList.add('posts__card__content');
            spanContent.classList.add('posts__card__content__nick');
            pContent.classList.add('posts__card__content__text');
            spanDate.classList.add('posts__card__botoes__data')
            
            imgCard.src = post.owner.avatarUrl;
            spanContent.innerText = post.owner.username;
            pContent.innerText = post.post;
            spanDate.innerText = post.createdAt;
    
            if (post.owner.id === userId) {
                const btnEdit = document.createElement('button');
                const btnDelete = document.createElement('button');
                
                divBtn.classList.add('posts__card__botoes');
                btnEdit.classList.add('posts__card__botoes__editar');
                btnDelete.classList.add('posts__card__botoes__apagar');
                ;

                btnEdit.addEventListener('click', () => {
                    main.innerHTML = ""
                    EditarPost.editarPost(post)
                    console.log("editar")
                })

                btnDelete.addEventListener('click', () => {
                    console.log(post.id)
                    Api.deletePost(post.id)
                    console.log("apagar")
                })

                btnEdit.innerText = "Editar";
                btnDelete.innerText = "Apagar";
    
                divBtn.append(btnEdit, btnDelete);
            }
            
            divImg.appendChild(imgCard);
            divContent.append(spanContent, pContent,spanDate);
            divCard.append(divImg,divContent,divBtn)
            section.appendChild(divCard);
            main.appendChild(section)
        })
    }
}

export default Posts