import React from 'react';

function About() {
  return (
    <div id="about" className="flex justify-center items-center bg-slate-200 min-h-screen">
      <div className="max-w-4xl w-full bg-gradient-to-r from-purple-200 to-blue-300 rounded-lg shadow-lg hover:shadow-3xl transition-shadow duration-500 ease-in-out hover:scale-105 p-12">
        <h2 className="text-4xl font-bold text-zinc-800 mb-4 text-center">ABOUT</h2>
        <p className="text-lg leading-relaxed font-semibold text-gray-800 px-6">
          Manasvi Technologies (OPC) Pvt. Ltd. is an IT Company situated in Bhopal, Madhya Pradesh, India. Our professionals design elements that complement the content, creating an interactive, user-friendly interface with integrated application features controlled by a robust technical foundation at the backend, giving visitors a personalized experience.
        </p>
        <p className="mt-4 text-lg font-semibold leading-relaxed text-gray-800 px-6">
          Great website design goes beyond aesthetics. It attracts visitors and effectively communicates your product, company, and brand. At Manasvi Technologies, we embrace cutting-edge technologies and have pioneered future technologies at times of skepticism. We are lifelong learners, continuously educating ourselves on emerging trends to stay ahead in the industry.
        </p>
      </div>
    </div>
  );
}

export default About;
