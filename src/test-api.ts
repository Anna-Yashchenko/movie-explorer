const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getApiKey = async () => {
    console.log('Ключ API:', API_KEY);
}