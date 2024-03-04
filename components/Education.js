import React from "react";
import { IoSchool } from "react-icons/io5";

const Education = () => {
  return (
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
      <h3 className="text-3xl font-bold py-1 dark:text-white ">Education</h3>
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
        </div>
      </div>
    </section>
  );
};

export default Education;
