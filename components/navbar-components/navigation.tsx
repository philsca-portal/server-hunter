"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {

    const pathname = usePathname();

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
        <nav className="mx-6 hidden lg:flex items-center space-x-3 lg:space-x-5 font-semibold">
            {routes.map((route) => (
                <Link key={route.href} href={route.href}className={`${route.active ? 'text-black' : 'text-gray-500'} hover:scale-110 cursor-pointer transition`}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation;