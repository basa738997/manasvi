import React from 'react';

const Client = () => {
  return (
    <div className="client h-screen" id="our-clients">
      <div className="flex justify-center items-center bg-slate-300">
        <div className="w-1/2 p-4">
          <img className="services-img-client hover:scale-110 transition duration-300" src="https://manasviportfolio.online/static/media/Clients.e806f778af216dd603dd.png" alt="" />
        </div>
        <div className="w-1/2 p-4">
          <div className="mb-4">
            <span className="text-4xl  font-extrabold block mb-4 hover:text-black text-center text-green-500">CLIENT REVIEWS</span>
            <span className="block mb-4 font-semibold text-lg text-gray-600 px-4">
              Crafting the perfect content for the client reviews section of Manasvi Technologies (OPC) Pvt. Ltd.'s company portfolio requires a nuanced approach that highlights the company's commitment to innovation, customer satisfaction, and technical excellence. Below is a meticulously designed draft that encapsulates the ethos and achievements of Manasvi Technologies through the lens of its most valuable asset—its clients.
            </span>
          </div>
          <div className="review-card flex gap-8 flex-row flex-wrap">

            <div className="review-card-new flex flex-row transform bg-slate-100 px-8 py-4 rounded-lg hover:scale-110 transition duration-300 translate-x-10 translate-y-10 translate-z-0 hover:bg-slate-50 hover:shadow-2xl gap-2">
              <div className="review-card-top">
                <img className='w-[75px] h-[90px]' src="https://manasviportfolio.online/static/media/manvika%20Pharma.5d10789d3f3f60eb7faa.png" alt="" />
              </div>
              <div className="review-card-bottom">
                <span className='font-bold text-lg mb-2 block'>Manvika Pharma</span>
                <span className='flex gap-2 items-center '>
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                </span>
              </div>
            </div>

            <div className="review-card-new flex flex-row transform bg-slate-100 px-8 py-4 rounded-lg hover:scale-110 transition duration-300 translate-x-10 translate-y-10 translate-z-0 hover:bg-slate-50 hover:shadow-2xl gap-2">
              <div className="review-card-top">
                <img className='w-[75px] h-[90px]' src="https://manasviportfolio.online/static/media/manvika%202.116324b4fbe39d60cce2.png" alt="" />
              </div>
              <div className="review-card-bottom">
                <span className='text-lg font-bold block mb-2 '>MCS</span>
                <span className='flex items-center flex-wrap gap-2'>
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                  <img className="h-[20px]" src="https://manasviportfolio.online/static/media/star.143b88b0dce1916f4e80.png" alt="star" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
