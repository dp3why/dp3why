import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillCode,
  AiFillSafetyCertificate,
  AiFillCodeSandboxSquare,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { IoSchool } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import herop from "../public/hero.png";
import movie from "../public/movie.png";
import thumbnails from "../public/Thumbnails.png";
// import details from "../public/details.png";
import search from "../public/search.png";
import loginpage from "../public/login.png";
import Link from "next/link";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HY</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white  dark:bg-gray-900  justify-center  ">
        <section
          id="header"
          className="snap-center min-h-screen inset-0   pb-10"
        >
          {/* =================== NavBar ======================= */}
          <nav className="py-8 px-5 lg:mx-10 xl:mx-[10rem] inset-0 mb-3 flex justify-between dark:text-white">
            <h1 className="font-burtons mr-5 font-bold text-xl">dp3why</h1>
            <ul className="flex items-center gap-2 text-sm">
              <li className="mr-2 hidden sm:block cursor-pointer">
                <h3>About</h3>
              </li>

              <li className="mr-2 hidden sm:block cursor-pointer">
                <h3>Skills</h3>
              </li>
              <li className="mr-4 hidden sm:block cursor-pointer">
                <h3>Projects</h3>
              </li>
              <li className="mr-2 hidden sm:block cursor-pointer">
                <h3>Education</h3>
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
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          {/* =================== Hero ======================= */}
          <div
            id="hero"
            className="flex flex-wrap px-3 w-screen   text-center justify-center items-center 
            lg:px-[10rem] xl:px-[12rem]"
          >
            <div className="flex flex-col justify-center ">
              <h2
                className="text-2xl xl:text-3xl px-3 text-black font-roboto font-semibold 
             dark:text-white text-start"
              >
                Hi!
              </h2>
              <h1
                className="text-start text-4xl xl:text-5xl px-3 py-2 text-orange-600 font-roboto font-semibold
             dark:text-orange-300 "
              >
                I&apos;m Hongyi Wang
              </h1>

              <p
                className="text-start text-sm md:text-md lg:text-xl
                pb-5 px-3   sm:w-[30rem]  max-w-md
               text-gray-800 dark:text-gray-100 font-roboto
               "
              >
                I&apos;m enthusiastic about web development and software
                engineering, and would like to apply my skills in solving real
                world problems.
              </p>
            </div>
            {/* <div className="flex flex-auto rounded-full items-center justify-center "> */}
            <Image
              className=" flex flex-1 rounded-full"
              src={herop}
              alt="heropage"
              width={350}
              height={350}
              // layout="fill"
              objectFit="cover"
            />
            {/* </div> */}
          </div>
          <div
            className="text-5xl flex cursor-pointer 
          justify-center md:gap-[3rem] lg:gap-[4rem] 
          gap-[2rem] py-3 mt-5 lg:mt-12 text-gray-600 dark:text-gray-400"
          >
            <AiFillTwitterCircle className="dark:hover:text-white" />
            <AiFillLinkedin className="dark:hover:text-white" />
            <Link href="https://github.com/dp3why">
              <AiFillGithub className="dark:hover:text-white" />
            </Link>

            <AiFillGoogleCircle className="dark:hover:text-white" />
            <AiFillMail className="dark:hover:text-white" />
          </div>
        </section>
        {/* ===================Skills======================= */}
        <section
          id="skills"
          className="snap-center bg-gradient-to-tl from-orange-500 to-orange-300 w-screen p-10"
        >
          <div>
            <h3 className="text-3xl py-1 font-bold">Skills</h3>
            <p className="text-md text-justify   py-2 leading-6 max-w-4xl text-gray-800">
              As a master&apos;s in Applied Data Science, I have acquired a
              profound comprehension of the theoretical and practical aspects of
              computer science, software development and cloud computing.
            </p>
          </div>
          <div id="lang" className="md:flex gap-8">
            {/* ============ 1 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col
             shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillCodeSandboxSquare />
              </div>
              <h3 className="text-lg text-black font-bold my-2 ">
                Tools and Software
              </h3>

              <h4 className="py-1 text-sm text-gray-800">
                ReactJS / NextJS / Django
              </h4>
              <h4 className="py-1 text-sm text-gray-800">
                React Native / Go Fiber
              </h4>
              <h4 className="py-1 text-sm text-gray-800">MySQL / MongoDB</h4>
              <h4 className="py-1 text-sm text-gray-800">
                DynamoDB / Neo4J / Redis
              </h4>
              <h4 className="py-1 text-sm text-gray-800">
                Hadoop / PySpark / AWS
              </h4>
            </div>
            {/* ============ 2 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillCode />
              </div>
              <h3 className="text-lg font-bold text-black my-2 ">
                Programming Skills
              </h3>
              <h4 className="py-1 text-gray-800 ">Python / Java / Go</h4>
              <h4 className="py-1  text-gray-800 ">JavaScript / HTML / CSS</h4>
              <h4 className="py-1  text-gray-800 ">Cypher / SQL</h4>
            </div>
            {/* ============ 3 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillSafetyCertificate />
              </div>
              <h3 className="text-lg font-bold my-2 text-black">
                Certification
              </h3>

              <h4 className="py-2 text-gray-800">Google Cloud Certified:</h4>
              <p className="text-gray-800 ">Cloud Digital Leader</p>
            </div>
          </div>
        </section>
        {/* ========== projects  ==========*/}
        <section id="projects" className=" snap-center p-10">
          <div>
            <h3 className="text-3xl font-bold py-1  text-orange-600  dark:text-orange-300  ">
              Projects
            </h3>
            <p className="text-md text-justify py-2 max-w-4xl leading-6 text-gray-800 dark:text-gray-200">
              My coursework and involvement in numerous projects have granted me
              hands-on expertise in both front-end and back-end development, and
              I have become well-versed with tools like ReactJS, NextJS, Spring
              Boot, and Django, etc. Furthermore, I have utilized my knowledge
              of machine learning, with TensorFlow, Keras, and Scikit-learn, to
              solve real-world problems.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-auto lg:flex-row "></div>

            <div className="basis-1/3 flex-1 "></div>
          </div>
          <Link href="https://nefle.vercel.app">
            <Image
              className="cursor-pointer  brightness-90 hover:brightness-110  rounded-lg object-cover transition duration-300 ease-in-out"
              alt="img"
              width={"100%"}
              height={"40%"}
              layout="responsive"
              src={movie}
            />
          </Link>
          <div className="flex  flex-col lg:flex-row gap-10 py-10 ">
            <div className=" flex-1 ">
              <Link href=" https://nefle.vercel.app/signin ">
                <Image
                  className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={loginpage}
                />
              </Link>
            </div>

            <Link href=" https://nefle.vercel.app/search ">
              <div className="relative flex-1">
                <Image
                  className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
                  alt="img"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={search}
                />
              </div>
            </Link>
            <div className="  flex-1">
              <Image
                className=" brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
                alt="img"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={thumbnails}
              />
            </div>
          </div>
        </section>

        {/* ===================Education======================= */}
        <section
          id="education"
          className="bg-gradient-to-br snap-center
          w-screen p-10"
          style={{
            position: "relative",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            alignItems: "center",
            backgroundImage: `url(vit.jpg)`,
          }}
        >
          <h3 className="text-3xl font-bold py-1 dark:text-white ">
            Education
          </h3>
          <div id="eduwrapper" className="md:flex gap-12">
            {/* ============ 1 placeholder ========== */}
            <div
              className="text-center justify-start items-center flex flex-col
              p-10 rounded-xl my-10  flex-1"
            ></div>
            {/* ============ 2 edu ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-8 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <IoSchool />
              </div>
              <h3 className="text-lg font-bold text-black my-2 ">
                University of Southern California
              </h3>
              <h4 className="py-1 font-semibold text-gray-800 ">
                Master of Science
              </h4>
              <h4 className="py-1  text-gray-800 ">Applied Data Science</h4>
              <h4 className="py-1  text-gray-800 ">Expected Dec 2023</h4>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="w-screen flex flex-col dark:bg-black dark:text-gray-200
      items-center justify-center p-2"
      >
        <h3 className="font-semibold">Contact information</h3>
        <div
          className="text-xl flex cursor-pointer 
          justify-center
          gap-[1rem] py-3 text-gray-600 dark:text-gray-400"
        >
          <AiFillTwitterCircle className="dark:hover:text-white" />
          <AiFillLinkedin className="dark:hover:text-white" />
          <AiFillGithub className="dark:hover:text-white" />
          <AiFillGoogleCircle className="dark:hover:text-white" />
          <AiFillMail className="dark:hover:text-white" />
        </div>
        <p className="text-sm">dp3why@gmail.com</p>
      </footer>
    </div>
  );
}
