import { Link, NavLink } from "react-router-dom";

function PageNav() {
  return (
    <nav className="flex items-center justify-between text-[1.4rem] text-gray-950">
      <ul className="flex items-center gap-12 font-semibold text-gray-900">
        <li className="transition-all duration-300 hover:text-gray-950">
          <NavLink to="/">Home</NavLink>
        </li>

        <li className="transition-all duration-300 hover:text-gray-950">
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li className="transition-all duration-300 hover:text-gray-950">
          <NavLink to="/services">Services</NavLink>
        </li>
      </ul>

      <div>
        <img src="/public/T3.png" className="h-20 w-20" />
      </div>

      <div className="border-primary-800 hover:bg-primary-100 right-0 border px-8 py-3 font-semibold transition-all duration-300">
        <Link to="/contactme" className="">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}

export default PageNav;
