const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getGenres = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ru-RU`)
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    return data.genres;
}

export const searchMovies = async (query: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}&language=ru-RU`)
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
}

export const getMovieDetails = async (id: string) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=ru-RU`)
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    return await response.json();
}

export const getFilteredMovies = async (page: number, genreId?: number, year?: number, rating?: number) => {
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=ru-RU&page=${page}`
    if (genreId) {
        url += `&with_genres=${genreId}`
    }
    if (year) {
        url += `&primary_release_year=${year}`
    }
    if (rating) {
        url += `&vote_average.gte=${rating}`
    }
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`)
    }
    const data = await response.json();
    return {results: data.results, totalPages: data.total_pages};
}
