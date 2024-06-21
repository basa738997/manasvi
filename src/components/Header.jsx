import React from 'react';

function Header() {
  return (
    <nav className="flex z-10 items-center justify-between py-2 px-12 bg-white text-white sticky w-full h-[80px] border-b-2">
      <div className="flex flex-col justify-center items-center">
        <a href="#">
          <img
            src="https://manasviportfolio.online/static/media/manasvi_logo.b48774965ddf1f4d9635.png"
            alt="logo"
            className="h-10 w-10 border border-black p-2 rounded-full object-cover"
          />
          <span className="text-xl font-bold mx-2 text-indigo-600 hover:text-black">Manasvi Technologies</span>
        </a>
      </div>
      <div className="hidden md:flex space-x-4">
        <ul className="flex items-center justify-between text-xl font-semibold text-indigo-600 space-x-8">
          <li><a href="#" className="hover:text-black hover:font-bold">HOME</a></li>
          <li><a href="#" className="hover:text-black hover:font-bold">PRODUCT</a></li>
          <li><a href="#" className="hover:text-black hover:font-bold">SERVICES</a></li>
          <li><a href="#" className="hover:text-black  hover:font-bold">CLIENTS</a></li>
          <li><a href="#"><button className="px-4 py-2 bg-indigo-700 text-white hover:bg-white hover:border-black border-2 rounded-full hover:text-black hover:font-bold hover:scale-105">CONTACT US</button></a></li>
        </ul>
      </div>
      <div className="md:hidden">
        <button>
          <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <button className="hidden">
          <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Header;
