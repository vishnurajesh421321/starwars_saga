import {type RefObject, useEffect} from "react";

export default function useOutsideClick(ref: RefObject<HTMLDivElement | null>, handler: () => void) {
    useEffect(() => {
        function handleOutsideClick(event:MouseEvent) {
            if(!ref?.current || ref?.current.contains(event?.target as Node)) {
                return;
            }
            handler();
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return () => removeEventListener("mousedown", handleOutsideClick);
    }, [ref, handler])
}