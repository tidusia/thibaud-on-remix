import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../data/routes";
import { useLocation } from "react-router";

const menuOpenClassName = "absolute top-0 inset-x-0 md:hidden z-40";
const menuCloseClassName = "hidden";

const navLinks = [ROUTES.blog, ROUTES.contact];

const Nav = () => {
  const location = useLocation();
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link
                to="/"
                className="text-2xl tracking-tight leading-10 font-extrabold"
              >
                Thibaud Duthoit
              </Link>

              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setOpen(true)}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block pl-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`mx-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out ${
                  location.pathname === link.href
                    ? "text-blue-500"
                    : "text-gray-500"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className={open ? menuOpenClassName : menuCloseClassName}>
        <div className="shadow-md">
          <div className="p-2 bg-gray-900 shadow-xs overflow-hidden">
            <div className="pl-2 pr-4 pt-4 flex items-center justify-between">
              <Link
                to="/"
                className="text-2xl tracking-tight leading-10 font-extrabold text-white"
              >
                Thibaud Duthoit
              </Link>
              <div className="-mr-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                  onClick={() => setOpen(false)}
                >
                  <svg
                    className="h-6 w-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="px-2 pt-2 pb-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
