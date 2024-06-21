import React from 'react';

function About() {
  return (
    <div id="about" className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-200 to-blue-300">
      <div className="text-center rounded-lg mx-8">
      <span className="text-5xl  font-bold block mb-4 hover:text-black text-center text-green-500">ABOUT</span>
        <p className='text-start rounded-lg text-lg font-semibold px-12 py-4'>
          Manasvi Technologies (OPC) Pvt. Ltd. is an IT Company situated at Bhopal, Madhya Pradesh (India). Our professionals design element that complements the content, an interactive, user-friendly interface with integrated application features controlled with a technical foundation at the backend, to give the visitor a sense of a personal touch. Great website designing is actually about creating a website that aligns with an overarching strategy. Well-designed websites offer much more than just aesthetics. They attract visitors and help people understand your product, company, and brand. We have always been open to newest technologies, and have worked on future technologies at a time when people were sceptical about it. We are learners and hence, we never cease to educate ourselves on anything new and different that comes up in this industry. And this eagerness to stay ahead of the game is what has set us apart.
        </p>
      </div>
    </div>
  );
}

export default About;
