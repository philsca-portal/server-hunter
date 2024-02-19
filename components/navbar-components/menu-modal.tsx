"use client";

import { MenuIcon } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const MenuModal = () => {

    const pathname = usePathname();
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (open: boolean) => {
        if(!open){
            setOpenModal(false);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setOpenModal(false);
            }
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Initial check on mount
        handleResize();

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const routes = [
        {
            href: '/',
            label: 'Find a Server',
            active: pathname === '/'
        },
        {
            href: '/companies',
            label: 'Providers List',
            active: pathname === '/companies'
        },
        {
            href: '/map',
            label: 'Location Map',
            active: pathname === '/map'
        },
        {
            href: '/review',
            label: 'Write a Review',
            active: pathname === '/review'
        },
        {
            href: '/coupons',
            label: 'Coupons',
            active: pathname === '/coupons'
        }
    ];

    return(
        <Sheet open={openModal} onOpenChange={handleOpenModal}>
            <SheetTrigger onClick={() => setOpenModal(true)} asChild>
                <MenuIcon className="block lg:hidden hover:scale-110 cursor-pointer transition text-slate-600" size={28} />
            </SheetTrigger>
            <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                    {routes.map((route) => (
                        <Link key={route.href} href={route.href}className={`${route.active ? 'text-black' : 'text-gray-500'} flex justify-center py-6 rounded-3xl hover:scale-110 hover:bg-gray-200 cursor-pointer transition w-full`}>
                            {route.label}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MenuModal;