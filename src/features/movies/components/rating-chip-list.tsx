import type { Rating } from '../../type.ts';
import Chip from '../../../components/ui/chip.tsx';

function RatingChipList({ rating }: { rating: Rating[] | undefined }) {
  return (
    <div className="flex gap-2 mt-3">
      {rating && rating.map(r => <Chip rating={r} />)}
    </div>
  );
}

export default RatingChipList;
