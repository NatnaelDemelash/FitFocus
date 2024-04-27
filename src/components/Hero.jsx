import React from 'react';

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 justify-center items-center text-center max-w-[800px] mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="uppercase font-medium">
          Unleash your strength and become
        </p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Power<span className="text-[#566573]">Bulked</span>
        </h1>
      </div>
      <p className="text-sm md:text-base lg:text-lg font-light">
        I hereby acknowledgement that I may become unbelievably swolenormous and
        accept all risks of becoming the local mass montrosity, afflicted with
        severe body dismorphia, unable to fit through doors.
      </p>

      <button className="px-8 py-4 rounded-md border-[2px] border-solid border-[#283747] backgroundShadow duration-300">
        <p>Accept & Begin</p>
      </button>
    </div>
  );
};

export default Hero;
