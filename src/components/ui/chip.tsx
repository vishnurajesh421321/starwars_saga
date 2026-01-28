import type { Rating } from '../../features/type.ts';

function Chip({ rating }: { rating: Rating }) {
  return (
    <div className="border border-[#2379d4] text-[#2379d4] pe-3 ps-3 pt-1 pb-1 text-xs rounded-4xl">
      {rating.Source}: {rating.Value}
    </div>
  );
}

export default Chip;
