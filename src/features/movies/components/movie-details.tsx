import { lazy, Suspense } from 'react';
import type { Movie } from '../../type.ts';

const MovieInfo = lazy(() => import('../components/movie-info.tsx'));
function MovieDetails({ movie }: { movie: Movie | null }) {
  return (
    <div className="h-full w-full">
      {movie ? (
        <Suspense
          fallback={
            <div className="h-full w-full flex items-center justify-center">
              <span>Loading movie info</span>
            </div>
          }
        >
          <MovieInfo
            title={movie.title}
            episode_id={movie.episode_id}
            release_date={movie.release_date}
            opening_crawl={movie.opening_crawl}
            poster={movie.poster}
            averageRating={movie.averageRating}
            rating={movie.rating}
            director={movie.director}
          ></MovieInfo>
        </Suspense>
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          Please select a movie
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
