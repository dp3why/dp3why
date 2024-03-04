import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillLinkedin,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      className="w-screen flex flex-col dark:bg-gray-800 dark:text-gray-200
  items-center justify-center p-2"
    >
      <h3 className="font-semibold">Contact information</h3>
      <div
        className="text-xl flex cursor-pointer 
      justify-center
      gap-[1rem] py-3 text-gray-600 dark:text-gray-400"
      >
        <Link href="https://twitter.com/dp3why">
          <AiFillTwitterCircle className="dark:hover:text-white" />
        </Link>
        <Link href="https://www.linkedin.com/in/hongyiusc/">
          <AiFillLinkedin className="dark:hover:text-white" />
        </Link>
        <Link href="https://github.com/dp3why">
          <AiFillGithub className="dark:hover:text-white" />
        </Link>
        <AiFillGoogleCircle className="dark:hover:text-white" />
        <AiFillMail className="dark:hover:text-white" />
      </div>
      <p className="text-sm">dp3why@gmail.com</p>
    </footer>
  );
};

export default Footer;
