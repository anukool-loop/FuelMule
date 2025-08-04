import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export default function BannerPopup({ heading, element, close }) {

    const popupRef = useRef();

    // Handle click outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                close();
            }
        }

        function handleEscape(event) {
            if (event.key === "Escape") {
                close();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [close]);


    return (
        <div className="fixed z-[100] top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-sm bg-black/30">

            <div ref={popupRef} className="bg-white shadow-[1px_1px_10px_#80808080] max-w-[645px] px-[24px] py-[16px] rounded-[4px] relative">
                <span
                    onClick={() => close()}
                    className="absolute top-4 right-4 text-[#808080] cursor-pointer">
                    <X />
                </span>
                <h3 className="border-b pb-[16px] text-[14px] font-[500] select-none">{heading}</h3>
                <div className="pt-[24px] text-[14px]">
                    {typeof element === "function" ? element() : ""}
                </div>
            </div>
        </div>
    );
}
