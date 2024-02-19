import { MoveLeft, Search } from "lucide-react";

const HeroText = () => {
    return(
        <div className="lg:text-start text-center lg:p-0 lg:mt-8 lg:ml-8 p-8 flex flex-col space-y-10">
            <p className="md:text-[60px] text-[50px] leading-none font-bold">
                Easily search and compare among <span className="md:text-8xl text-7xl server leading-none font-extrabold">48,421</span> servers from <span className="md:text-6xl text-5xl font-normal">698</span> different providers.
            </p>
            <div className="flex lg:justify-start justify-center items-center space-x-4">
                <a href="#table" className="flex items-center w-fit border border-[#e87b73] text-[#e87b73] hover:text-white hover:bg-[#e87b73] hover:scale-105 p-4 text-sm rounded-3xl cursor-pointer transition-all">
                    Search Servers
                    <Search className="h-4 w-4 ml-2" />
                </a>
                <p className="flex items-center md:max-w-full max-w-36 italic text-slate-600 text-sm">
                    <MoveLeft className="h-4 w-4 mr-1 animate-arrow-to-left" />
                    Click this to find your perfect server!
                </p>
            </div>
        </div>
    )
}

export default HeroText;