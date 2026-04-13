export const LS_KEYS = {
    FAVORITES: "favorites",
} as const;

export const  posterUrlByName = (name: string) => `https://image.tmdb.org/t/p/w342${name}`;
