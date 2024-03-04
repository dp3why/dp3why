import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";
import { Link as Scroll } from "react-scroll";
const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className="sticky py-8 px-5 lg:px-10 xl:px-[10rem]
        z-50
  bg-white dark:bg-gray-700 w-screen
  inset-0  flex justify-between dark:text-white"
    >
      <Link href="/">
        <h1 className="cursor-pointer font-burtons mr-5 font-bold text-xl">
          dp3why
        </h1>
      </Link>
      <ul className="flex items-center gap-2 text-sm">
        <li className="mr-2 hidden sm:block cursor-pointer">
          <h3>About</h3>
        </li>

        <li className="mr-2 hidden sm:block cursor-pointer">
          <Scroll to="skills" smooth={false}>
            <h3>Skills</h3>
          </Scroll>
        </li>
        <li className="mr-2 hidden sm:block cursor-pointer">
          <Scroll to="projects" smooth={false}>
            <h3>Projects</h3>
          </Scroll>
        </li>
        <li className="mr-4 hidden sm:block cursor-pointer">
          <Scroll to="education" smooth={false}>
            <h3>Education</h3>
          </Scroll>
        </li>
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-orange-500 to-orange-300
               text-white px-4 py-2 border-none rounded-md ml-8"
            href="mailto:dp3why@gmail.com"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
