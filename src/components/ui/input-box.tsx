import React from "react";

type InputBoxProps = {
    type?: 'password' | 'email' | 'text';
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    icon?: React.ReactNode;
}
function InputBox({type,value = 'text', onChange,placeholder, icon}: InputBoxProps) {
    const [inputValue, setInputValue] = React.useState(value);
    const handleChange = (v: string)   => {
        setInputValue(v);
        onChange?.(v)
    }
    return (
        <div className="relative w-full h-[40px] bg-white border border-gray-300 rounded-[4px]">
            <div className="absolute left-0 top-0 w-[40px] h-full flex items-center justify-center">
                {icon}
            </div>
            <input className="w-full h-full focus-visible:outline-gray-400 ps-[40px]" onChange={(e) => handleChange(e.target.value)}
                   value={inputValue}
                   placeholder={placeholder}
                   type={type}/>
        </div>
    );
}

export default InputBox;