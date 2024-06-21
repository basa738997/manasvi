import React from 'react';

const Hero = () => {
  return (
    <div id="intro" className="flex flex-col md:flex-row items-center p-8 bg-white">
      <div className="md:w-2/3 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">SOFTWARE DEVELOPMENT</h2>
        <p className="text-gray-700 mb-4">
          Welcome to Manasvi Technologies (OPC) Pvt. Ltd., where we specialize in transformative App Development, Web Development, and comprehensive IT Services. Our mission is to drive your success through cutting-edge technology solutions tailored to your unique needs and aspirations.
        </p>
        <a href="https://manasvitech.in" target="_blank" rel="noreferrer" className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-red-400 to-blue-400 text-white rounded-full text-center">
          Explore More
        </a>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img className="max-w-full animate-ease-in-out animate-duration-1000 hover:scale-110 transition duration-300" src="	https://manasviportfolio.online/static/media/hero.6a9912eea329111b3e7f.png" alt="Hero" />
        
      </div>
    </div>
  );
};

export default Hero;
