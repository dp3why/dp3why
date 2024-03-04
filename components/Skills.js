import React from "react";
import {
  AiFillCode,
  AiFillCodeSandboxSquare,
  AiFillSafetyCertificate,
} from "react-icons/ai";

const Skills = () => {
  return (
    <section
      id="skills"
      className=" p-10 snap-center bg-gradient-to-tl 
     dark:bg-gray-400 w-screen"
    >
      <div>
        <h3 className="text-3xl py-1 font-bold">Skills</h3>
        <p className="text-md text-justify   py-2 leading-6 max-w-4xl text-gray-800">
          As a master student in Applied Data Science, I have acquired a
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
          <h4 className="py-1 text-sm text-gray-800">Hadoop / PySpark / AWS</h4>
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
          <h4 className="py-1 text-gray-800 ">Java / Python / Go</h4>
          <h4 className="py-1  text-gray-800 ">JavaScript / HTML / CSS</h4>
          <h4 className="py-1  text-gray-800 ">Kotlin / Cypher / SQL</h4>
        </div>
        {/* ============ 3 ========== */}
        <div
          className="text-center justify-start items-center flex flex-col 
      shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
        >
          <div className="text-5xl text-center">
            <AiFillSafetyCertificate />
          </div>
          <h3 className="text-lg font-bold my-2 text-black">Certification</h3>

          <h4 className="py-2 text-gray-800">Google Cloud Certified:</h4>
          <p className="text-gray-800 ">Cloud Digital Leader</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
