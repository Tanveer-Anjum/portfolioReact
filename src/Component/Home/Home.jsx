import React from "react";
import aviterImg from "../../assets/tanveer.png";
import TextChange from '../TextChange'

function Home() {
  return (
    <>
      <div className="text-white flex w-[200%] justify-between items-start p-5 md:p-10 ">
        <div className="md:w-2/4 ">
          <h1 className="text-3xl md:text-4xl font-bold flex leading-normal tracking-tighter">
       <TextChange/>
          </h1>
          <p className="text-sm md:text-xl tracking-tight pt-4">
          Passionate Full Stack and WordPress Developer, crafting high-quality web experiences with modern technologies.<br/>
          Building dynamic websites and applications that solve real-world problems. Let's create something amazing together!
          </p>
          <button className="md:md-10 flex mt-4 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:mt-5 md:px-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </div>
        <div>
          <img className="w-2/6 " src={aviterImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
