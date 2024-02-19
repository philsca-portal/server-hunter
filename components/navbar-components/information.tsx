"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import InformationOptions from "./information-options";

const Information = () => {

    const [clicked, setClicked] = useState(false);
    const ref = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (ref.current && !ref.current.contains(event.target as Node)) {
            setClicked(false);
          }
        };
    
        document.addEventListener("click", handleOutsideClick);
    
        return () => {
          document.removeEventListener("click", handleOutsideClick);
        };
      }, []);

    return(
        <div className="relative lg:block hidden">
            <button ref={ref} onClick={() => setClicked(!clicked)} type="button" className="flex items-center w-fit border border-[#e87b73] text-[#e87b73] hover:text-white hover:bg-[#e87b73] hover:scale-105 p-4 text-sm rounded-3xl transition-all">
                Information for Providers
                <ChevronRight className={`${clicked && 'rotate-90'} h-4 w-4 transition`}/>
            </button>
            <InformationOptions clicked={clicked} />
        </div>
    )
}

export default Information;