import { create } from 'zustand';

interface FavoritesStore {
    favorites: number[];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    toggleFavorite: (id: number) => void;
}

export const useFavoritesStore = create<FavoritesStore>((set) => ({
    favorites: [],

    addFavorite: (id) => set((state) => ({
    favorites: [...state.favorites, id]
})),

    removeFavorite:(id) => set((state) => ({
        favorites: state.favorites.filter((favorite) => favorite !== id)
    })),

    toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id)
            ? state.favorites.filter((favorite) => favorite !== id)
            : [...state.favorites, id]
    }))
}));