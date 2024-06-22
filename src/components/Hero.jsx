import React from 'react';

const Hero = () => {
  return (
    <div id="intro" className="flex flex-col md:flex-row items-center justify-around p-16 bg-slate-50">
      <div className="md:w-2/3 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-800 mb-4 hover:text-blue-600 transition duration-300 ease-in-out">
          SOFTWARE DEVELOPMENT
        </h2>
        <p className="text-gray-700 mb-4 font-semibold leading-relaxed">
          Welcome to Manasvi Technologies (OPC) Pvt. Ltd., where we specialize in <br />
          transformative App Development, Web Development, and comprehensive IT Services. <br />
         Our mission is to drive your success through cutting-edge technology solutions <br />
         tailored to your unique needs and aspirations.
        </p>
        <a 
          href="https://manasvitech.in"  
          className="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded-full text-center hover:bg-green-600 transition duration-300 ease-in-out hover:text-white hover:scale-105 text-md font-bold shadow-lg"
        >
          Explore More
        </a>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img
          className="max-w-full transition duration-300 bg-transparent ease-in-out hover:scale-110 rounded-lg"
          src="https://manasviportfolio.online/static/media/hero.6a9912eea329111b3e7f.png"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
