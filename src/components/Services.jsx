import React from 'react';

const Services = () => {
  return (
    <div id="our-services" className="flex flex-col md:flex-row items-center p-8 bg-blue-100">
      <div className="md:w-2/3 mb-8 md:mb-0 space-around">
        <h2 className="text-4xl px-8 font-bold text-blue-800 hover:text-black my-4">OUR SERVICES</h2>
        <p className="text-gray-700 px-8 font-semibold text-md mb-4 max-w-md text-justify ">
          Manasvi Technologies (OPC) Pvt. Ltd is at the forefront of digital innovation, offering comprehensive services in web development, digital marketing, app development, and IT services. Our team of experts is dedicated to delivering cutting-edge solutions that drive growth and efficiency for our clients. By leveraging the latest technologies and trends, we ensure your business stays ahead in the competitive digital landscape. Whether you're looking to build a dynamic website, enhance your online presence, develop a mobile app, or streamline your IT operations, Manasvi Technologies is your partner in digital excellence.
        </p>
        <ul className="font-semibold text-md pl-8 space-y-2 text-gray-900">
          <li> Web Development</li>
          <li>App Development</li>
          <li>IT Services</li>
          <li>Digital Marketing</li>
        </ul>
      </div>
      <div className="md:w-1/3 flex items-center justify-center">
        <img className="max-w-full animate-bounce" src="https://manasviportfolio.online/static/media/services.385b3550381b1b0b9610.png" alt="Services" />
      </div>
    </div>
  );
};

export default Services;
