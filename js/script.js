'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const advertisement = document.querySelectorAll(".promo__adv img");
    const genre = document.getElementById("promo__genre");
    const bg = document.getElementById("promo__bg");
    const url = "img/bg.jpg";
    const list = document.getElementById("list");
    const addForm = document.querySelector('form.add');
    const input = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');
    const promoContainer = document.querySelector('.promo__interactive');

    addForm.addEventListener ('submit', (event) => {
        event.preventDefault();

        let newFilms = input.value;
        const favorite = checkbox.checked;

        if (newFilms) {

            if (newFilms.length > 21) {
                newFilms = `${newFilms.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log('Добавляем новый фильм');
            }
            movieDB.movies.push(newFilms);

            sortArr(movieDB.movies);
            createMovieList( movieDB.movies, list);
        }

        event.target.reset();
    })
    
    
   const deleteAdv = (arr) => {
    arr.forEach(elem => {
        elem.remove();
    });
   };

   
    
    const makeChanges = () => {
        genre.textContent = "драма";
    
    bg.style.backgroundImage = `url(${url})`;
    bg.style.width = "110%";
    };

   
    
   
    const sortArr = (arr) => {
        arr.sort();
    };

   
   
    
    
    function createMovieList (films, perent) {
        perent.innerHTML = "";

         sortArr(films);

        films.forEach((film , i) => {
            perent.innerHTML += ` <li class="promo__interactive-item">${i + 1}${film}
            <div class="delete"></div>
        </li>`
        });
    };

   
    promoContainer.addEventListener('click', (event) => {
        const promoItem = event.target.parentElement;
        const deleteBtn = event.target;
        if (deleteBtn.classList.contains('delete')) {
            const indexFilm = Array.from(deleteBtn.closest('ul').children).indexOf(promoItem);
            movieDB.movies.splice(indexFilm, 1)
            promoItem.remove();
            createMovieList( movieDB.movies, list);
        };
    });

    
    deleteAdv(advertisement);
    makeChanges();
    createMovieList( movieDB.movies, list);
});





