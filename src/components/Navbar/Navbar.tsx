import { SearchMovie } from "@/components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-lg text-neutral-200 ">
      <nav className="flex flex-col-reverse">
        <ul className="flex py-5 justify-between items-center ">
          <div className="flex  items-center gap-8">
            <li>
              <div className="relative ml-auto flex-1 md:grow-0">
                <SearchMovie />
              </div>
            </li>
          </div>
          <div className="flex gap-1">
            <li>
              <NavLink
                className=" py-1 px-8  text-gray-100   hover:text-cyan-500/60 hover:border-cyan-500/60   flex items-center gap-1"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" py-1 px-8 border-cyan-500 text-cyan-500   hover:text-cyan-500/60 hover:border-cyan-500/60 border rounded-full  flex items-center gap-1"
                to="/"
              >
                Profile
              </NavLink>
            </li>
          </div>
        </ul>
        <ul className="flex  justify-between h-24 ">
          <li className="border  w-full flex justify-center items-center ">
            <NavLink
              to="watching"
              className={({ isActive }) =>
                `${
                  isActive ? "bg-cyan-950/40" : ""
                } w-full h-full hover:bg-cyan-950/40  flex flex-col-reverse justify-center items-center text-blue-500 font-bold`
              }
            >
              Watching
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-eye"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00abfb"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
            </NavLink>
          </li>
          <li className="border  w-full flex justify-center items-center">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-cyan-950/40" : ""
                } w-full h-full hover:bg-cyan-950/40 flex flex-col-reverse justify-center items-center text-green-500 font-bold`
              }
              to="watched"
            >
              Watched
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-square-rounded-check"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#00b341"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 12l2 2l4 -4" />
                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
              </svg>
            </NavLink>
          </li>

          <li className="border w-full flex justify-center items-center">
            <NavLink
              className={({ isActive }) =>
                `${
                  isActive ? "bg-cyan-950/40" : ""
                } w-full h-full hover:bg-cyan-950/40 flex flex-col-reverse justify-center items-center text-yellow-500 font-bold `
              }
              to="towatch"
            >
              To Watch
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-calendar-week"
                width="34"
                height="34"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffbf00"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                <path d="M16 3v4" />
                <path d="M8 3v4" />
                <path d="M4 11h16" />
                <path d="M8 14v4" />
                <path d="M12 14v4" />
                <path d="M16 14v4" />
              </svg>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
