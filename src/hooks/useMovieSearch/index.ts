import {useState} from "react";
import {searchMovies} from "../../api/tmdb";
import type {Movie} from "../../types/Movie";


export const useMovieSearch = () => {
    const [foundMovies , setFoundMovies ] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const search = async (query: string) => {
        setLoading(true);
        try {
            const response = await searchMovies(query);
            setFoundMovies (response);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Произошла ошибка');
        } finally {
            setLoading(false);
        }
    };
    return { foundMovies , loading, error, search };
}