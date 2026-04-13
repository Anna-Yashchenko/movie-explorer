export interface Item {
    id: number;
    name: string;
}

export interface Movie {
    id: number;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
    genre_ids: number[];
    genres?: Item[];
}

export interface MovieDetails extends Movie {
    budget: number;
    revenue: number;
    runtime: number;
    tagline: string;
    homepage: string;
    genres: Item[];
    production_companies: ProductionCompany[];
}

export interface ProductionCompany {
    id: number;
    name: string;
    logo_path: string | null;
}