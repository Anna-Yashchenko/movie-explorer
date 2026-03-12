import { useState, useEffect } from 'react';
import { getPopularMovies } from '../../api/tmdb';
import type {Movie} from "../../types/Movie";

export const usePopularMovies =  () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPopularMovies();
                setMovies(response);
                setLoading(false);
            }
            catch (error) {
                setError(error instanceof Error ? error.message : 'Произошла ошибка');
                setLoading(false);
            }
        }
        fetchData().catch(console.error);
    }, []);

    return { movies, loading, error };
};