import type { Movie, SelectItem } from '../../type.ts';
import { useMemo } from 'react';
function SortFn(a: Movie, b: Movie, key: keyof Movie) {
  if (key === 'release_date') {
    const aDate = new Date(a[key] ?? '').getFullYear();
    const bDate = new Date(b[key] ?? '').getFullYear();
    return bDate - aDate;
  } else if (key === 'episode_id') {
    return (a[key] as number) - (b[key] as number);
  } else {
    return (b[key] as number) - (a[key] as number);
  }
}

export default function useFilterMovies(
  movies: Movie[] | undefined,
  query: string,
  sort: SelectItem | null
) {
  return useMemo(() => {
    if (!movies) {
      return movies;
    }
    let result: Movie[] = [...movies];
    if (sort) {
      const key = sort.value as keyof Movie;
      result.sort((a, b) => SortFn(a, b, key));
    }
    if (query.trim()) {
      const normalizedQuery = query.trim().toLowerCase();
      result = result.filter(({ title }: Movie) =>
        title.toLowerCase().includes(normalizedQuery)
      );
    }
    return result;
  }, [movies, query, sort]);
}
