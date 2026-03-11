export interface Movie {
    id: number;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    vote_average: number;
    genre_ids: number[];
}