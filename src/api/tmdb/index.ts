const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPopularMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ru-RU`);
            const data = await response.json();
            return data.results;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
};

export const getGenres = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ru-RU`)
        const data = await response.json();
        return data.genres;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const searchMovies = async (query:string) => {
    try{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}&language=ru-RU`)
        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}