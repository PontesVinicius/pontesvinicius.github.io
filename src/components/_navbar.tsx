"use client";
import { ThemeToggle } from "./_themeToggle";

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a>Contato</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex z-50">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <a>
              Projetos
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-300">
              <li>
                <a>Projeto 1</a>
              </li>
              <li>
                <a>Projeto 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Contato</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  );
};
