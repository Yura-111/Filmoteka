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
    
// let saveFilm = null;

    // function auditList() {
    //     if (saveFilm === null) {
    //         saveF = [];
    //     }        
    // };
    // auditList()

    refs.adwBtn.addEventListener('mouseup', (event) => {
        const saveFilm = localStorage.getItem(LOCAL_STORAGE_KEY);
        // console.log(saveFilm.length);
        if (!saveFilm) {
            localStorage.setItem (LOCAL_STORAGE_KEY, JSON.stringify(films));
            refs.adwBtn.innerText = 'Remove';
            return 
        } else {
            // localStorage.removeItem(LOCAL_STORAGE_KEY);
            // refs.adwBtn.innerText = 'add to Watched';
            // console.log("run")
            return 
        }
        })

