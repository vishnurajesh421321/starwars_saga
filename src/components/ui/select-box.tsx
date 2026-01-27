import React from "react";
import type {SelectItem} from "../../features/type.ts";
type SelectBoxProps = {
    placeholder: string;
    items: SelectItem[];
    onChange: (item: SelectItem) => void;
}

function SelectBox({onChange, items, placeholder}:SelectBoxProps) {
    const [selected, setSelected] = React.useState<SelectItem | null>(null);
    const [isOpen, setIsopen] = React.useState<boolean>(false);
    const handleOnchange = (value: SelectItem) => {
        setSelected(value);
        onChange(value);
        setIsopen(false);
    }
    const handleOpenChange = () => {
        setIsopen((open) => !open);
    }
    return (
        <div className="relative">
            <button onClick={handleOpenChange}
                className="rounded-[4px] min-w-[150px] text-left bg-white ps-4 pe-4 pt-2 pb-2 border border-[#2379d4] text-sm font-medium text-[#2379d4] hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
                { selected ? selected.label : placeholder }
            </button>
            {
                isOpen && (
                    <ul className="w-full rounded-[4px] overflow-hidden absolute top-[40px] left-0 shadow-lg">
                        {items.map(item => (
                            <li className="ps-3 pe-3 cursor-pointer pt-2 whitespace-nowrap pb-2 bg-white border-b-1 border-gray-200 hover:bg-gray-100" key={item.value} onClick={() => handleOnchange(item)}>{item.label}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}

export default SelectBox;