const films = [
    { id: "913290", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "49046", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "541134", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "83659", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "203085", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "619730", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "436270", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "1032950", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
    { id: "157061", href: "https://api.themoviedb.org/3/trending/all/day?api_key=e862719ae3fd0863df1748cb2452c82b" },
];

const refs = {
    watchedBtn:document.querySelector('.watched'),
    queueBtn:document.querySelector('.queue'),
    adwBtn:document.querySelector('.adw'),
    atqBtn:document.querySelector('.atq'),
    }
    
    const LOCAL_STORAGE_KEY = 'films';
    let parseFilm=[];
    let deletePosition=-1; 


    const saveFilm = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!saveFilm)  {
        localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify([])); 
        };            


    
        function statusBtn(object){
            let arrayFilms=[]
            try {
                arrayFilms = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)); 
            } catch (error) {
                console.log(error);            
            }
            if (!arrayFilms.length){
                console.log("Список фільмів збережених у памяті пустий кнопка add to watch");
                refs.adwBtn.innerText = 'ADD TO WATCHED';
                return 0;
            } 
            else
            {
            const resultSearch = arrayFilms.findIndex(option => option.id === object.id)
                if (resultSearch>-1){
                    console.log("Фільм знаходиться в збережених у памяті кнопка remove під номером - ",resultSearch);
                refs.adwBtn.innerText = 'REMOVE';
                return resultSearch;
                } else
                {
                    console.log("Фільма немає в збережених у памяті кнопка add to watch");
                    refs.adwBtn.innerText = 'ADD TO WATCHED';
                return -1;
                }

            }
        }

    function addFilm(object){
        try {
            const arrayF = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            arrayF.push(object)
            localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify(arrayF));  
            console.log('фільм додано')
            refs.adwBtn.innerText = 'REMOVE';
        } catch (error) {
            console.log(error);            
        }
        }
    function removeFilm(deleteP){
        try {
            const arrayF = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            arrayF.splice(deleteP,1)
            localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify(arrayF));
            console.log('фільм видалено')
            refs.adwBtn.innerText = 'ADD TO WATCHED';   
        } catch (error) {
            console.log(error);            
        }
        }


        const b = Math.floor(Math.random() * 7);
        console.log('Рандомний фільм', films[b]);
        deletePosition = statusBtn(films[b]);

    refs.adwBtn.addEventListener('click', () => {
    const teksT = refs.adwBtn.innerText;
    console.log(teksT);
    (teksT==='ADD TO WATCHED') ? addFilm(films[b]) : removeFilm(deletePosition);
    })