import React from 'react';

const Client = () => {
  return (
    <div className="client min-h-screen" id="clients">
      <div className="flex flex-col md:flex-row justify-center items-center bg-slate-300">
        <div className="w-full md:w-1/2 p-4">
          <img className="services-img-client hover:scale-110 transition  duration-300 mx-auto" src="https://manasviportfolio.online/static/media/Clients.e806f778af216dd603dd.png" alt="" style={{ width: '100%', height: '100%' , objectFit: 'cover', objectPosition: 'center', }} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="mb-4">
            <h2 className="text-4xl font-extrabold mb-4 hover:text-white text-center text-gray-900">CLIENT REVIEWS</h2>
            <p className="mb-4 font-semibold text-lg text-gray-600 px-4 text-center">
              Crafting the perfect content for the client reviews section of Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a nuanced approach that highlights the company's commitment to innovation, customer satisfaction, and technical excellence. Below is a meticulously designed draft that encapsulates the ethos and achievements of Manasvi Technologies through the lens of its most valuable asset—its clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="review-card flex flex-row transform bg-slate-100 px--3 py-2 rounded-lg hover:scale-105 transition duration-300">
              <div className="review-card-top">
                <img className='w-28 h-20 mx-auto' src="https://manasviportfolio.online/static/media/manvika%20Pharma.5d10789d3f3f60eb7faa.png" alt="" />
              </div>
              <div className="review-card-bottom flex flex-col justify-center">
                <span className='font-bold text-lg mb-2 text-center'>Manvika Pharma</span>
                <div className='flex justify-center'>
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                </div>
              </div>
            </div>
  
            <div className="review-card flex flex-row transform bg-slate-100 px-4 py-2 rounded-lg hover:scale-105 transition duration-300">
              <div className="review-card-top">
                <img className='w-24 h-20 mx-auto' src="https://manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png" alt="" />
              </div>
              <div className="review-card-bottom flex flex-col justify-center">
                <span className='font-bold text-lg mb-2 text-center'>MCS</span>
                <div className='flex justify-center'>
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-6" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
