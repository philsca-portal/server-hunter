"use client";

import Information from "./navbar-components/information";
import Logo from "./navbar-components/logo";
import Navigation from "./navbar-components/navigation";
import MenuModal from "./navbar-components/menu-modal";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
  }, [scrollY]);
  
  return (
    <div className={`${scrollY >= 100 ? ' -translate-y-full' : 'translate-y-0'} transition delay-75 mx-8 py-4 sticky top-0 z-20`}>
        <div className="flex justify-between">
            {/* This is the Logo */}
            <Logo />
            {/* This is the main navigation */}
            <Navigation />
            {/* Additional informations */}
            <Information />

            {/* This will show if not lg screen */}
            <MenuModal />
        </div>
    </div>
  );
}

export default Navbar;
