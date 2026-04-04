import { create } from 'zustand';
import type { Movie } from "../../types/Movie";

interface FavoritesStore {
    favorites: Movie[];
    toggleFavorite: (movie: Movie) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: [],

    toggleFavorite: (movie) => set((state) => {
        const exists = state.favorites.some((fav) => fav.id === movie.id);
        return {
            favorites: exists
                ? state.favorites.filter((fav) => fav.id !== movie.id)
                : [...state.favorites, movie]
        };
    })
}));