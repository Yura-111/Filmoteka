const refs = {
    watchedBtn:document.querySelector('.watched'),
    queueBtn:document.querySelector('.queue'),
    adwBtn:document.querySelector('.adw'),
    atqBtn:document.querySelector('.atq'),
    }
    
    
    
    function fetchFilms() {
        searchQuery = '';
    const configApi = {
        URL: `https://api.themoviedb.org/3/movie/${searchQuery}?api_key=e862719ae3fd0863df1748cb2452c82b&language=en-US`,
        // key: 'e862719ae3fd0863df1748cb2452c82b'
    }
    
    return console.log({name});
    
    }
    
    refs.adwBtn.addEventListener('click', fetchFilms)