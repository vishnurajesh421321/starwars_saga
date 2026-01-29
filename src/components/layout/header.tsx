import SelectBox from '../ui/select-box.tsx';
import type { Movie, SelectItem } from '../../features/type.ts';
import InputBox from '../ui/input-box.tsx';

function Header({
  setSearchQuery,
  setSort,
  setSelectedMovie,
}: {
  setSearchQuery: (val: string) => void;
  setSort: (a: SelectItem | null) => void;
  setSelectedMovie: (a: Movie | null) => void;
}) {
  const items: SelectItem[] = [
    { value: 'release_date', label: 'Year' },
    { value: 'episode_id', label: 'Episode' },
    { value: 'averageRating', label: 'Rating' },
  ];
  const handleQueryChange = (text: string) => {
    setSearchQuery(text);
    setSelectedMovie(null);
  };
  const icon = (
    <img className="w-4" src="/src/assets/svg/search.svg" alt="search" />
  );
  return (
    <div className="flex w-full gap-5 bg-gray-100 items-center ps-6 pe-6 pt-3 pb-3 border-b-1 border-gray-300 shadow">
      <SelectBox
        placeholder="SORT BY..."
        items={items}
        onChange={item => setSort(item)}
      />
      <InputBox
        icon={icon}
        placeholder="Type to filter..."
        onChange={text => handleQueryChange(text)}
      />
    </div>
  );
}

export default Header;
