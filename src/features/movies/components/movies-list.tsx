import useFetchQuery from "../../../hooks/use-fetch-query.ts";
import {MOVIE_API_BASE} from "../../../lib/config.ts";
import type {Movie, SelectItem} from "../../type.ts";
import useFilterMovies from "../hooks/use-filter-movies.ts";


function MoviesList({query, sort}: {query: string, sort: SelectItem | null}) {
    const {data: movies, isPending, isError} = useFetchQuery<Movie[]>(['movies'], MOVIE_API_BASE);
    const filteredMovies = useFilterMovies(movies, query, sort)
    if(isPending) {
        return <div>Loading...</div>;
    }
    if(isError) {
        return <div>Error...</div>;
    }
    return (
        filteredMovies?.map((movie) => (
            <div key={movie.episode_id}>{movie.title}</div>
        ))
    );
}

export default MoviesList;