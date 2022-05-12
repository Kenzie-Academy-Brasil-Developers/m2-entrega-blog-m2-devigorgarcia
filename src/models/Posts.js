import Api from "../Controller/Api.js";

class Posts {
    static selecionarPagina(listaPosts) {
        const main = document.querySelector('main')
        const section = document.createElement('section');
        section.classList.add('posts');

        for(let i =1; i <= listaPosts.lastPage; i++){
            const pageBtn = document.createElement('button');

            pageBtn.id = i;
            pageBtn.classList.add('pageBtn');
            pageBtn.innerText = i;
            pageBtn.addEventListener('click', ()=>{
                Api.pagePost(i);
            })
            
            section.appendChild(pageBtn)
            main.appendChild(section)
        }
    }

    //{page: 1, previousPage: null, nextPage: 'page=2', lastPage: 37, data: Array(15)}

    static DisplayPosts(listaPosts) {
        console.log(listaPosts)
        listaPosts.data.forEach((post) => {
            const divCard = document.createElement('div');
            const divImg = document.createElement('div')
            const imgCard = document.createElement('img');
            const divContent = document.createElement('div')
            const spanContent = document.createElement('span');
            const pContent = document.createElement('p');
            const divBtn = document.createElement('div');
            const btnEdit = document.createElement('button');
            const btnDelete = document.createElement('button');
            const spanDate = document.createElement('span');

            divCard.classList.add('posts__card');
            divImg.classList.add('posts__card__imgContainer');
            imgCard.classList.add('posts__card__img');
            divContent.classList.add('posts__card__content');
            spanContent.classList.add('posts__card__content__nick');
            pContent.classList.add('posts__card__content__text');
            divBtn.classList.add('posts__card__botoes');
            btnEdit.classList.add('posts__card__botoes__editar');
            btnDelete.classList.add('posts__card__botoes__apagar');
            spanDate.classList.add('posts__card__botoes__data');

        })
    }
}

export default Posts