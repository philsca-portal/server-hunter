"use client";

import { CircleUserRound, Hotel, Megaphone } from "lucide-react";
import Link from "next/link";

interface InformationOptionsProps {
    clicked: boolean
}

const InformationOptions: React.FC<InformationOptionsProps> = ({
    clicked
}) => {
    return(
        <div className={`absolute z-10 mt-2 border bg-white border-[#e87b73] text-[#e87b73] rounded-3xl ${clicked ? ' animate-pop-up-animation' : 'hidden'} `}>
            <div className="flex flex-col text-sm p-4">
                <Link className="py-3 px-4 hover:text-white hover:bg-[#e87b73] rounded-2xl transition" href={'/providers'}>
                    <div className="flex item-center">
                        <Hotel className="h-5 w-5 mr-2" />
                        Add your Provider
                    </div>
                </Link>
                <Link className="py-3 px-4 hover:text-white hover:bg-[#e87b73] rounded-2xl transition" href={'/providers'}>
                    <div className="flex item-center">
                        <CircleUserRound className="h-5 w-5 mr-2" />
                        Manage Account
                    </div>
                </Link>
                <Link className="py-3 px-4 hover:text-white hover:bg-[#e87b73] rounded-2xl transition" href={'/providers'}>
                    <div className="flex item-center">
                        <Megaphone className="h-5 w-5 mr-2"/>
                        Advertising
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default InformationOptions;