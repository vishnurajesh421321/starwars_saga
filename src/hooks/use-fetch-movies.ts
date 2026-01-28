import {useQuery} from "@tanstack/react-query";
import {API_KEY, MOVIE_API_BASE, RATING_API_BASE} from "../lib/config.ts";
import type {Movie, MovieData} from "../features/type.ts";
import {averageRating} from "../features/movies/utils/average-rating.ts";
async function fetchMovies(): Promise<Movie[]> {
    const response = await fetch(MOVIE_API_BASE);
    if(!response.ok) {
        throw new Error('Failed to fetch movies from API' + response.statusText);
    }
    return response.json();
}
async function fetchRating(title: string, year:number): Promise<MovieData> {
    const getYear = new Date(year).getFullYear();
    const response = await fetch(`${RATING_API_BASE}${API_KEY}&t=${encodeURIComponent(title)}&y=${getYear}`);
    if(!response.ok) {
        throw new Error('Failed to fetch rating from API' + response.statusText);
    }
    return response.json();
}
export default function useFetchQuery<TResponse>() {
    const {data, isPending, isError, error} = useQuery<TResponse>({
        queryKey: ['movies'],
        queryFn: async () => {
            const data = await fetchMovies();
            const response =  await Promise.all(
                data.map(m => {
                    const movieData = await fetchRating(m.title, m.release_date);
                    return {
                        ...movieData,
                        averageRating: averageRating(movieData?.Ratings)
                    };
                })
            );
            if(!response.ok) {
                throw new Error(`Something went wrong fetching "${queryKey[0]}" failed.`);
            }
            return response.json() as Promise<TResponse>;
        },
        enabled: queryKey.length > 1 ? !!queryKey[1]: true,
    });
    return {data, isPending, isError, error};
}