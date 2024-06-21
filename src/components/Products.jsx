import React from 'react';

function Products() {
  return (
    <div className=" w-[100%] h-[100%] flexour-products" id="products ">
      <div className=" text-center flex ">
        <h1 className="text-2xl font-bold">Our Products</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Product 1: E-Commerce */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" />
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">E-Commerce</span>
            <span className="card-description text-gray-600 mt-2">
              Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and consumers alike in the digital marketplace.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="https://manasvimart.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 2: Hotel Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/hotel.a814f46366181d78816d.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" />
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Hotel Management System</span>
            <span className="card-description text-gray-600 mt-2">
              Run your hotel freely now, manage multiple branches with one website, human recourse management system, online as well as offline room & food booking system, get analytical reports.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 3: Clinic Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/clinic.1c340a09b09f367966f7.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" />
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Clinic Management System</span>
            <span className="card-description text-gray-600 mt-2">
              Amazing product for all our doctors, manage your clinic like never before, Easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="https://cliniccare.online/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 4: Restaurant Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/restaurnet.fbf24ed567004a2dfbf8.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" />
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Restaurant Management System</span>
            <span className="card-description text-gray-600 mt-2">
              Run your restaurant freely now, manage multiple branch with one website, human recourse management system, online food booking system, manage point of sale, get analytical reports.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 5: Tiffin Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/tiffin%20logo.a40195ba6f20435a0c69.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" />
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Tiffin Management System</span>
            <span className="card-description text-gray-600 mt-2">
              Now get full control on incoming and outgoing of your Tiffin’s , get all information about pending payments etc. get all subscribers list with address and mode of distribution at one place.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="https://mcstiffin.in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 6: Salon Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/saloon.f42aa85a686aa68ecb05.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" /> 
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Salon Management System</span>
            <span className="card-description text-gray-600 mt-2">
              Run your salon freely now, manage multiple branch with one website, human recourse management system, online as well as offline room & food booking system, get analytical reports.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>

        {/* Product 7: Pharmacy Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/pharmecy.6d9fd1f05da31b6cefe4.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" /> 
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Pharmacy Management System</span>
            <span className="card-description text-gray-600 mt-2">
            Now running pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management, create easy tax invoice.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>


        {/* Product 8: Hospital Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/hospital.2aa73a2a7fa2f4be03a9.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" /> 
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Hospital Management System</span>
            <span className="card-description text-gray-600 mt-2">
            Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>


        {/* Product 9: Travel Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/Travels.8da6dad732f115ef84b8.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" /> 
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">Travel Management System</span>
            <span className="card-description text-gray-600 mt-2">
            Travel Management System optimizes travel operations, simplifying itinerary management, scheduling, billing, and resource allocation for efficient, organized, and traveler-centric services
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>


        {/* Product 10: HRM Management System */}
        <div className="card flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4">
          <div className="card-left flex-shrink-0 mb-4 md:mb-0 md:mr-4">
            <img src="https://manasviportfolio.online/static/media/hrm.3d904a2fa69d95da607d.png" alt="" className="w-[160px] h-[160px] object-cover rounded-lg" /> 
          </div>
          <div className="card-right flex flex-col justify-between">
            <span className="card-heading text-xl font-semibold">HRM Management System</span>
            <span className="card-description text-gray-600 mt-2">
            HRM software streamlines employee management, from recruitment to development, enhancing productivity and ensuring efficient HR operations for your business.
            </span>
            <div className="card-btn flex mt-4 space-x-2">
              <a href="/" className="text-blue-500 hover:underline">Video</a>
              <a href="/" className="text-blue-500 hover:underline">Details</a>
              <a href="/" className="text-blue-500 hover:underline demo-button">Demo</a>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}


export default Products;