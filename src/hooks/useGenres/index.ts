import {useEffect, useState} from "react";
import {getGenres} from "../../api/tmdb";

import type {Item} from '../../types'


export const useGenres = () => {
    const [genres, setGenres] = useState<Item[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getGenres();
                setGenres(response);
            }
            catch (error) {
                setError(error instanceof Error ? error.message : 'Произошла ошибка');
            }
        }
        fetchData().catch(console.error);
    }, []);

    return { genres, error };
}