import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside x-ref="sidebar">
      <button
        type="button"
        className="absolute flex items-center justify-center w-8 h-8 p-1 text-gray-400 transition-colors duration-300 bg-white rounded-full sm:hidden top-2 left-4 hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <span className="sr-only">Open Menu</span>
      </button>
      <div className="h-full transition-all bg-gray-800 sm:flex">
        <div
          className="top-0 z-20 w-64 h-full text-gray-400 transition-transform duration-500 bg-gray-800 sm:block "
          x-cloak
        >
          <div className="flex justify-between px-4 py-3 bg-gray-900 bg-opacity-90">
            Linkedin ChatBot
          </div>
          <nav className="py-4">
            <ul>
              <NavLink to={"/"}>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start w-full px-4 py-2 space-y-2 hover:bg-gray-900 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="mt-0">Dashboards</span>
                  </a>
                </li>
              </NavLink>
              <NavLink to={"/new"}>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start w-full px-4 py-2 space-y-2 hover:bg-gray-900 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mt-0">New Campaign</span>
                  </a>
                </li>
              </NavLink>
              <NavLink to={"/history"}>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-start w-full px-4 py-2 space-y-2 hover:bg-gray-900 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-blue-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="mt-0">Campaign History</span>
                  </a>
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
