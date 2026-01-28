import type { Movie } from '../../type.ts';
import convertToRoman from '../../../lib/utils/convert-to-roman.ts';
import Rating from './rating.tsx';
type MovieListItemProps = {
  onSelectMovie: (movie: Movie) => void;
  selectedMovie: Movie | null;
  movie: Movie | undefined;
};

function MovieListItem({
  onSelectMovie,
  selectedMovie,
  movie,
}: MovieListItemProps) {
  const romanNo = convertToRoman(movie?.episode_id);

  const handleSelectedMovie = (movie: Movie) => {
    onSelectMovie(movie);
  };
  return !movie ? (
    <div>No movies found</div>
  ) : (
    <div
      onClick={() => handleSelectedMovie(movie)}
      className={`${selectedMovie?.episode_id === movie.episode_id ? 'bg-[#eef4fc]' : ''} flex items-center text-left gap-4 pt-4 pb-4 ps-4 pe-4 border-b border-gray-200 hover:bg-[#eef4fc] cursor-pointer`}
    >
      <div className="w-[15%]">
        <h5 className="text-sm font-normal">EPISODE {movie.episode_id}</h5>
      </div>
      <div className="text-left w-[35%]">
        <small className="text-sm font-normal">
          Episode {romanNo} {movie.title}
        </small>
      </div>
      <div className="w-[30%] ms-auto flex">
        <Rating rating={movie?.averageRating ?? 0} />
      </div>
      <div className="w-[1fr] text-left ms-auto">
        <small className="font-normal text-sm">{movie.release_date}</small>
      </div>
    </div>
  );
}

export default MovieListItem;
