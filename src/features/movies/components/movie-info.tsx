import type { Movie } from '../../type.ts';
import convertToRoman from '../../../lib/utils/convert-to-roman.ts';
import Rating from './rating.tsx';
import RatingChipList from './rating-chip-list.tsx';

function MovieInfo({
  averageRating,
  title,
  poster,
  opening_crawl,
  director,
  episode_id,
  rating,
}: Movie) {
  const episode = convertToRoman(episode_id);
  return (
    <div className="w-full p-5">
      <h3 className="text-2xl mb-3">
        Episode {episode} {title}
      </h3>
      <div className="flex gap-4">
        <div className="flex-2/10">
          <img src={poster} alt={title} />
        </div>
        <div className="flex-7/10">
          <p>{opening_crawl}</p>
        </div>
      </div>
      <div className="mt-3 mb-3">Directed by: {director}</div>
      <div className="flex gap-4">
        <small className="text-sm">Average rating:</small>
        <Rating size={20} rating={averageRating ?? 0} />
      </div>
      <RatingChipList rating={rating} />
    </div>
  );
}

export default MovieInfo;
