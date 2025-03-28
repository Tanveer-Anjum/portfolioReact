import React, { useState } from "react";
import { RiMenu2Line, RiCloseLine } from "@remixicon/react";

function NavBar() {
  const [menu, setMenu] = useState(false); // Single state for both menu visibility & icon toggle

  return (
    <>
      <nav className="flex flex-wrap justify-between md:items-center text-blue-300 px-10 pt-6 md:px-20">
        <span className="text-xl font-bold tracking-wide">Portfolio</span>
        
        {/* Navigation Menu */}
        <ul
          className={`${
            menu ? "block" : "hidden"
          } mx-10 py-4 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
        >
          <a href="#about"><li className="text-md transition-all duration-300 p-1 md:p-0">About</li></a>
          <a href="#Experience"><li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li></a>
          <a href="#Project"><li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li></a>
          <a href="#footer"><li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li></a>
        </ul>

        {/* Menu Toggle Button */}
        <button
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <RiCloseLine size={30} /> : <RiMenu2Line size={30} />}
        </button>
      </nav>
    </>
  );
}

export default NavBar;
