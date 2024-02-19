import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroText from "./components/hero-text";
import SplineAnimation from "./components/spline";
import ServerTable from "./components/tasks/server-table";

const Page = () => {
    return(
        <>
        <Navbar />
        <div className="mx-8">
            <div className="grid grid-cols-6">
                <div className="lg:col-span-3 col-span-6">
                    <HeroText />
                </div>
                <div className="lg:col-span-3">
                    <SplineAnimation />
                </div>
            </div>
            <div>
                <ServerTable />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Page;