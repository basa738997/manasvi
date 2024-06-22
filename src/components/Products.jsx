import React from 'react';

function Products() {
  return (
    <div className="w-full h-full bg-slate-100 flex flex-col items-center" id="products">
      <div className="text-center flex justify-center w-full">
        <h1 className="text-4xl text-center text-zinc-800 mt-8 font-bold border-b-2 border-zinc-800 inline-block">OUR PRODUCTS</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Product 1: E-Commerce */}
        <div className="card flex flex-col bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/e-commerce.cbd7fa0beb1b8b08d701.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">E-Commerce</span>
            <span className="text-gray-600 mt-2 text-center">
              Revolutionizing retail with seamless online shopping experience. Integrating user-friendly interface, secure transactions, and efficient logistics for ultimate customer satisfaction. Empowering businesses and consumers alike in the digital marketplace.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 2: Hotel Management System */}
        <div className="card flex flex-col bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/hotel.a814f46366181d78816d.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Hotel Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Run your hotel freely now, manage multiple branches with one website, human resource management system, online as well as offline room & food booking system, get analytical reports.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 3: Clinic Management System */}
        <div className="card flex flex-col bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/clinic.1c340a09b09f367966f7.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Clinic Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Amazing product for all our doctors, manage your clinic like never before, easy and handy to work, take and manage appointment, patient & doctor, also generate tax invoice.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 4: Restaurant Management System */}
        <div className="card flex flex-col bg-white shadow-lg  rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/restaurnet.fbf24ed567004a2dfbf8.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Restaurant Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Run your restaurant freely now, manage multiple branches with one website, human resource management system, online food booking system, manage point of sale, get analytical reports.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 5: Tiffin Management System */}
        <div className="card flex flex-col bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/tiffin%20logo.a40195ba6f20435a0c69.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Tiffin Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Now get full control on incoming and outgoing of your Tiffin’s, get all information about pending payments etc., get all subscribers list with address and mode of distribution at one place.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>


        {/* Product 7: Pharmacy Management System */}
        <div className="card flex flex-col bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/pharmecy.6d9fd1f05da31b6cefe4.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Pharmacy Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Now running a pharmacy is just like drinking a cup of tea with our PMS, easy control on inventory with various features, human resource management system, accounting management, supplier & customer management, create easy tax invoice.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 8: Hospital Management System */}
        <div className="card flex flex-col mb-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/hospital.2aa73a2a7fa2f4be03a9.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Hospital Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Hospital Management System streamlines healthcare operations, facilitating patient management, scheduling, billing, and resource allocation for efficient, organized, and patient-centered medical services.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 9: Travel Management System */}
        <div className="card flex flex-col mb-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/Travels.8da6dad732f115ef84b8.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">Travel Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              Travel Management System optimizes travel operations, simplifying itinerary management, scheduling, billing, and resource allocation for efficient, organized, and traveler-centric services.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>

        {/* Product 10: HRM Management System */}
        <div className="card flex flex-col mb-4 bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex-shrink-0 mb-4">
            <img src="https://manasviportfolio.online/static/media/hrm.3d904a2fa69d95da607d.png" alt="" className="w-40 h-40 object-cover rounded-lg mx-auto" />
          </div>
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl font-semibold text-center">HRM Management System</span>
            <span className="text-gray-600 mt-2 text-center">
              HRM software streamlines employee management, from recruitment to development, enhancing productivity and ensuring efficient HR operations for your business.
            </span>
            <div className="flex justify-center mt-4 space-x-4 p-4 border bg-gray-100 rounded-lg shadow-lg">
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Video</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Details</a>
  <a href="https://manasvimart.in/" className="text-blue-500   px-4 py-2 bg-white border border-blue-500 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white">Demo</a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
