import useFetchMovies from '../hooks/use-fetch-movies.ts';
import type { Movie, SelectItem } from '../../type.ts';
import useFilterMovies from '../hooks/use-filter-movies.ts';
import MovieListItem from './movie-list-item.tsx';

type MovieListProps = {
  query: string;
  sort: SelectItem | null;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
};
function MoviesList({
  query,
  sort,
  selectedMovie,
  setSelectedMovie,
}: MovieListProps) {
  const { data: movies, isPending, isError, error } = useFetchMovies();
  const filteredMovies = useFilterMovies(movies, query, sort);
  const handleSelectedMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };
  if (isPending) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (isError) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Something went wrong...
        {error?.message ?? ''}
      </div>
    );
  }
  return (
    <div className="h-full overflow-y-auto">
      {filteredMovies?.map(movie => (
        <MovieListItem
          selectedMovie={selectedMovie}
          onSelectMovie={handleSelectedMovie}
          key={movie.episode_id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default MoviesList;
