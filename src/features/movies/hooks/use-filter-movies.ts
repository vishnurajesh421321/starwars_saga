import type {Movie, SelectItem} from "../../type.ts";
import {useMemo} from "react";

export default function useFilterMovies(movies: Movie[] | undefined, query: string, sort: SelectItem | null) {
    return useMemo(() => {
        if (!movies) {
            return movies;
        }
        let result: Movie[] = structuredClone<Movie[]>(movies);
        if(sort) {
            const key = sort.value as keyof Movie;
            result.sort((a, b) => (a[key] as number) - (b[key] as number));
        }
        if(query.trim()) {
            const normalizedQuery = query.trim().toLowerCase();
            result = result.filter(({title}: Movie) => title.toLowerCase().includes(normalizedQuery));
        }
        return result;
    }, [movies, query, sort]);
}