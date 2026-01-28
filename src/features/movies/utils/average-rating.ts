import type { Rating } from '../../type.ts';
function normalizeRating(value: string) {
  if (value.includes('/')) {
    const [score, total] = value.split('/').map(Number);
    return (score / total) * 100;
  }

  if (value.includes('%')) {
    return Number(value.replace('%', ''));
  }

  return 0;
}

export function averageRating(rating: Rating[] | undefined) {
  if (!rating) {
    return 0;
  }
  const normalizedRatings = rating.map(r => normalizeRating(r.Value));

  const average =
    normalizedRatings.length > 1
      ? normalizedRatings.reduce((sum, v) => sum + v, 0) /
        normalizedRatings.length
      : normalizedRatings[0];

  return Math.floor(average / 10);
}
