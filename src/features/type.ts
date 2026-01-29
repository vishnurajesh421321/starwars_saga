export type SelectItem = { label: string; value: string };
export type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
  director: string;
  poster?: string;
  averageRating?: number;
  rating?: Rating[];
};
export type MovieData = {
  Poster: string;
  Ratings: Rating[];
};
export type Rating = {
  Source: 'Internet Movie Database' | 'Rotten Tomatoes' | 'Metacritic';
  Value: string;
};
