import SelectBox from "../ui/select-box.tsx";
import type {SelectItem} from "../../features/type.ts";
import InputBox from "../ui/input-box.tsx";


function Header({setSearchQuery, setSort}: {setSearchQuery: (val: string) => void; setSort: (a: SelectItem | null) => void}) {
    const items: SelectItem[] = [
        {value: 'release_date', label: 'Year'},
        {value: 'episode_id', label: 'Episode'},
    ]
    const icon = <img className="w-4" src="/src/assets/svg/search.svg" alt="search"/>;
    return (
        <div className="flex w-full gap-5 bg-gray-200 items-center ps-6 pe-6 pt-3 pb-3 border-b-1 border-gray-300">
            <SelectBox placeholder="SORT BY..." items={items} onChange={(item) => setSort(item)} />
            <InputBox icon={icon} placeholder="Type to filter..." onChange={(text) => setSearchQuery(text)} />
        </div>
    );
}

export default Header;