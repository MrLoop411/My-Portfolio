import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import DarkModeToogle from "./DarkModeToogle";

function PageNav() {
  const navRef = useRef();
  function showNavBar() {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="flex items-center justify-between text-[1.4rem] text-gray-950">
      <h2 className="text-[2rem] font-semibold italic tracking-widest text-[--color-grey-900]">
        Tee
      </h2>

      <nav ref={navRef} className="flex items-center gap-12 text-gray-700">
        <NavLink
          className="transition-all duration-300 hover:text-[--color-grey-900]"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="transition-all duration-300 hover:text-[--color-grey-900]"
          to="/projects"
        >
          Projects
        </NavLink>

        <NavLink
          className="transition-all duration-300 hover:text-[--color-grey-900]"
          to="/services"
        >
          Services
        </NavLink>
        <DarkModeToogle />

        <button className="nav-btn" onClick={showNavBar}>
          <FaTimes className="h-10 w-10" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <IoMenuOutline className="h-10 w-10" />
      </button>
      {/* <div className="flex gap-8">
        <button className="nav-btn" onClick={showNavBar}>
          <IoMenuOutline />
        </button>

        <Link
          className="border border-primary-800 px-8 py-3 font-semibold transition-all duration-300 hover:bg-primary-100"
          to="/contactme"
        >
          Contact Me
        </Link>
      </div> */}
    </header>
  );
}

export default PageNav;
