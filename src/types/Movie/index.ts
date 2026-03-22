export interface Movie {
    id: number;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
    genre_ids: number[];
    genres?: { id: number; name: string }[];
}

export interface MovieDetails extends Movie {
    budget: number;
    revenue: number;
    runtime: number;
    tagline: string;
    homepage: string;
    genres: { id: number; name: string }[];
    production_companies: {
        id: number;
        name: string;
        logo_path: string | null;
    }[];
}