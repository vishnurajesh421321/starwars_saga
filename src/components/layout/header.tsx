import SelectBox from "../ui/select-box.tsx";
import type {SelectItem} from "../../features/type.ts";
import InputBox from "../ui/input-box.tsx";


function Header() {
    const items: SelectItem[] = [
        {value: 'test', label: 'Test'},
        {value: 'test', label: 'Test sdfgs fskjf sjgfjs'},
    ]
    const icon = <img className="w-4" src="/src/assets/svg/search.svg" alt="search"/>;
    return (
        <div className="flex w-full gap-5 bg-gray-200 items-center ps-8 pe-8 pt-3 pb-3 border-b-1 border-gray-300">
            <SelectBox placeholder="SORT BY..." items={items} onChange={() => console.log('Selected item')} />
            <InputBox icon={icon} placeholder="Type to filter..." onChange={() => console.log('Selected item')} />
        </div>
    );
}

export default Header;